'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const blogPosts = [
    {
        title: 'Membangun Identitas Toko Online yang Kuat',
        category: 'E-Commerce',
        date: 'March 6, 2026',
        excerpt: 'Tips dan trik dalam merancang desain website yang meningkatkan kepercayaan pelanggan.',
        gradient: 'from-blue-500/10 to-indigo-500/10'
    },
    {
        title: 'Pentingnya Kecepatan Website untuk SEO',
        category: 'Technology',
        date: 'March 4, 2026',
        excerpt: 'Mengapa loading time adalah faktor kunci dalam peringkat Google bisnis Anda.',
        gradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
        title: 'Desain Minimalis: Kursi Panas di 2026',
        category: 'Design',
        date: 'Feb 28, 2026',
        excerpt: 'Bagaimana tren minimalisme membantu pengguna fokus pada pesan utama brand Anda.',
        gradient: 'from-purple-500/10 to-pink-500/10'
    }
];

export default function BlogPage() {
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
                        Blog <br className="hidden md:block" />
                        <span className="text-[#a1a1aa]">Cubiqin.</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#a1a1aa] max-w-xl">
                        Eksplorasi kami mengenai desain, teknologi, dan strategi bisnis digital untuk membantu Anda tumbuh.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogPosts.map((post, idx) => (
                        <article key={idx} className="group cursor-pointer">
                            <div className={`aspect-[16/10] rounded-3xl bg-gradient-to-br ${post.gradient} border border-[#27272a] mb-6 overflow-hidden relative transition-all duration-500 group-hover:border-blue-500/50`}>
                                <div className="absolute inset-0 flex items-center justify-center text-[#52525b] opacity-20 group-hover:scale-110 transition-transform duration-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 18l-2 2v2z" /><path d="M12 18h8" /><path d="M12 14h8" /><path d="M12 10h8" /></svg>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-blue-400">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#27272a]"></span>
                                    <span className="text-[#52525b]">{post.date}</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#fafafa] group-hover:text-blue-400 transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-[#a1a1aa] leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#fafafa] flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Baca Selengkapnya
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Mock */}
                <div className="mt-20 text-center">
                    <button className="px-8 py-4 rounded-xl border border-[#27272a] text-[11px] font-bold tracking-widest uppercase text-[#fafafa] hover:bg-[#111] transition-all">
                        Lihat Artikel Lainnya
                    </button>
                </div>
            </main>

            <footer className="border-t border-[#27272a] py-12 md:py-16 px-6 mt-16 md:mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="text-sm font-bold tracking-widest text-[#52525b] uppercase">Cubiqin © 2026</div>
                    <div className="flex gap-8 text-[10px] md:text-[11px] font-bold tracking-widest text-[#52525b] uppercase">
                        <a href="#" className="hover:text-[#fafafa] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[#fafafa] transition-colors">Dribbble</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
