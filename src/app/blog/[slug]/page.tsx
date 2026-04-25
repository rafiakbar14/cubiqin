import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getPostBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    // Strip HTML from excerpt for description
    const description = post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || '';

    return {
        title: `${post.title} - Cubiqin Blog`,
        description: description,
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const date = new Date(post.date).toLocaleDateString('id-ID', {
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
                        <span>{post.categories?.nodes[0]?.name || 'Uncategorized'}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27272a]"></span>
                        <span className="text-[#52525b]">{date}</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                        {post.title}
                    </h1>

                    {post.author?.node && (
                        <div className="flex items-center gap-4 pt-4 border-t border-[#18181b]">
                            {post.author.node.avatar && (
                                <img src={post.author.node.avatar.url} alt={post.author.node.name} className="w-10 h-10 rounded-full border border-[#27272a]" />
                            )}
                            <div className="text-sm font-medium text-[#a1a1aa]">
                                Oleh <span className="text-white">{post.author.node.name}</span>
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

                {/* Footer CTA */}
                <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#27272a] text-center space-y-8">
                    <h3 className="text-2xl md:text-4xl font-bold">Terinspirasi Untuk <br /><span className="text-[#a1a1aa]">Digitalkan Bisnis Anda?</span></h3>
                    <p className="text-[#a1a1aa] max-w-md mx-auto">Mari buat cerita sukses Anda sendiri bersama Cubiqin.</p>
                    <button
                        onClick={() => window.open('https://wa.me/6283135183093?text=Halo%20Cubiqin!%20Saya%20baru%20baca%20artikel%20dan%20ingin%20diskusi.', '_blank')}
                        className="px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                    >
                        Gas Diskusi Sekarang
                    </button>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
