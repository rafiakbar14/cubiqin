import React from 'react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30 font-sans">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div className="space-y-8 md:space-y-10">
                        <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Tentang Kami</span>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                            Arsitek <br />
                            <span className="text-[#a1a1aa]">Pengalaman</span> Digital.
                        </h1>

                        <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-lg">
                            Cubiqin adalah studio kreatif yang berdedikasi untuk menciptakan platform digital minimalis dengan performa kelas dunia. Kami mengutamakan esensi di atas ornamen.
                        </p>

                        <div className="flex gap-10 md:gap-12 pt-4">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#fafafa]">50+</div>
                                <div className="text-[9px] md:text-[11px] font-bold tracking-widest text-[#52525b] uppercase mt-1">Selesai</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#fafafa]">99%</div>
                                <div className="text-[9px] md:text-[11px] font-bold tracking-widest text-[#52525b] uppercase mt-1">Puas</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-[#111] border border-[#27272a] rounded-3xl aspect-[4/3] md:aspect-square flex items-center justify-center overflow-hidden">
                            <div className="text-blue-500/20 scale-[4] md:scale-[5]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2s-7.1 1.05-11.05 11c-.74 1.83-2.31 3-3.95 2l-3-3" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { title: "Kualitas", desc: "Setiap baris kode ditulis dengan presisi untuk performa maksimal." },
                        { title: "Modern", desc: "Menggunakan teknologi terdepan untuk masa depan bisnis Anda." },
                        { title: "Personal", desc: "Kami bekerja langsung dengan Anda untuk hasil yang akurat." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 md:p-10 rounded-3xl bg-[#111]/50 border border-[#27272a] hover:border-blue-500/50 transition-colors">
                            <h3 className="text-lg font-bold text-[#fafafa] mb-4">{item.title}</h3>
                            <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="border-t border-[#27272a] py-12 md:py-16 px-6 mt-16 md:mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="text-sm font-bold tracking-widest text-[#52525b] uppercase">Cubiqin © 2026</div>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#52525b] hover:text-[#fafafa] transition-colors uppercase">Instagram</a>
                        <a href="#" className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#52525b] hover:text-[#fafafa] transition-colors uppercase">Dribbble</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
