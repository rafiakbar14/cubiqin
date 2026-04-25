import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getAllPosts } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wawasan & Cerita Digital - Cubiqin',
    description: 'Eksplorasi kami mengenai desain, teknologi, dan strategi bisnis untuk membantu bisnis Anda tumbuh lebih berkesan di dunia digital.',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                {/* Header */}
                <div className="space-y-6 mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Wawasan & Berita</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                        Wawasan & <br className="hidden md:block" />
                        <span className="text-[#a1a1aa]">Cerita Digital.</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#a1a1aa] max-w-xl">
                        Eksplorasi kami mengenai desain, teknologi, dan strategi bisnis untuk membantu bisnis Anda tumbuh lebih berkesan di dunia digital.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {posts && posts.length > 0 ? (
                        posts.map((post: any, idx: number) => {
                            const date = new Date(post.date).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            });

                            return (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer">
                                    <div className={`aspect-[16/10] rounded-3xl bg-[#111] border border-[#27272a] mb-6 overflow-hidden relative transition-all duration-500 group-hover:border-blue-500/50`}>
                                        {post.featuredImage?.node?.sourceUrl ? (
                                            <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-[#52525b] opacity-20 group-hover:scale-110 transition-transform duration-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 18l-2 2v2z" /><path d="M12 18h8" /><path d="M12 14h8" /><path d="M12 10h8" /></svg>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-blue-400">
                                            <span>{post.categories?.nodes[0]?.name || 'Uncategorized'}</span>
                                            <span className="w-1 h-1 rounded-full bg-[#27272a]"></span>
                                            <span className="text-[#52525b]">{date}</span>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#fafafa] group-hover:text-blue-400 transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <div className="text-sm text-[#a1a1aa] leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                                        <div className="pt-2">
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#fafafa] flex items-center gap-2 group-hover:gap-4 transition-all">
                                                Baca Selengkapnya
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-[#a1a1aa]">Sedang menyiapkan artikel menarik untuk Anda...</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
