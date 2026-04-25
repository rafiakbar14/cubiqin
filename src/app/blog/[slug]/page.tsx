import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ShareButtons from '@/components/ShareButtons';
import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    // Strip HTML from excerpt safely
    const rawExcerpt = post?.excerpt || '';
    const description = rawExcerpt.replace(/<[^>]*>/g, '').substring(0, 160) || '';

    return {
        title: `${post?.title || 'Artikel'} - Cubiqin Blog`,
        description: description,
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Fetch related posts (latest posts excluding current)
    const allPosts = await getAllPosts();
    const relatedPosts = allPosts?.filter((p: any) => p.slug !== slug).slice(0, 3) || [];

    if (!post) {
        notFound();
    }

    const postDate = post?.date ? new Date(post.date) : new Date();
    const dateFormatted = postDate.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-16 md:py-32">
                {/* Article Header */}
                <div className="space-y-8 mb-12 md:mb-16">
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400">
                        <span>{post?.categories?.nodes?.[0]?.name || 'Uncategorized'}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27272a]"></span>
                        <span className="text-[#52525b]">{dateFormatted}</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                        {post?.title || 'Memuat Artikel...'}
                    </h1>

                    {post?.author?.node && (
                        <div className="flex items-center gap-4 pt-4 border-t border-[#18181b]">
                            {post.author.node.avatar?.url && (
                                <img src={post.author.node.avatar.url} alt={post.author.node.name || 'Author'} className="w-10 h-10 rounded-full border border-[#27272a]" />
                            )}
                            <div className="text-sm font-medium text-[#a1a1aa]">
                                Oleh <span className="text-white">{post.author.node.name || 'Tim Cubiqin'}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Featured Image */}
                {post.featuredImage?.node?.sourceUrl && (
                    <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-[#27272a] mb-16 shadow-2xl">
                        <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <article
                    className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                    prose-p:text-[#a1a1aa] prose-p:leading-relaxed
                    prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300
                    prose-blockquote:border-blue-600 prose-blockquote:bg-blue-500/5 prose-blockquote:p-6 prose-blockquote:rounded-2xl
                    prose-img:rounded-3xl prose-img:border prose-img:border-[#27272a]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Buttons */}
                <ShareButtons url={`/blog/${slug}`} title={post.title} />

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <div className="py-24 border-t border-[#18181b]">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/10 bg-blue-500/5 rounded-full">
                                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Terus Menjelajahi</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Cerita <span className="text-[#a1a1aa]">Lainnya.</span></h2>
                            </div>
                            <Link href="/blog" className="text-sm font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                                Lihat Semua
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related: any) => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group space-y-4">
                                    <div className="aspect-[16/10] rounded-2xl bg-[#111] border border-[#27272a] overflow-hidden relative group-hover:border-blue-500/30 transition-all">
                                        {related.featuredImage?.node?.sourceUrl ? (
                                            <img src={related.featuredImage.node.sourceUrl} alt={related.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 18l-2 2v2z" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                        {related.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer CTA */}
                <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#27272a] text-center space-y-8">
                    <h3 className="text-2xl md:text-4xl font-bold">Terinspirasi Untuk <br /><span className="text-[#a1a1aa]">Digitalkan Bisnis Anda?</span></h3>
                    <p className="text-[#a1a1aa] max-w-md mx-auto">Mari buat cerita sukses Anda sendiri bersama Cubiqin.</p>
                    <a
                        href="https://wa.me/6283135183093?text=Halo%20Cubiqin!%20Saya%20baru%20baca%20artikel%20dan%20ingin%20diskusi."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                    >
                        Gas Diskusi Sekarang
                    </a>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
