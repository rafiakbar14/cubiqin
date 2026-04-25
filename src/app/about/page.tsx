'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ShieldCheck, Sparkles, Zap, Users2, ChevronRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                {/* Hero Section: The Origin Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="space-y-8 md:space-y-10">
                        <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">The Origin Story</span>
                        </div>

                        <h1 className="text-4xl md:text-8xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                            Bukan Sekadar <br />
                            <span className="text-[#a1a1aa]">Nama Keren.</span>
                        </h1>

                        <div className="space-y-6 text-base md:text-lg text-[#a1a1aa] leading-relaxed italic">
                            <p>
                                "Banyak yang nanya, Cubiqin itu artinya apa? Jujurly, ini berangkat dari niat sederhana: <span className="text-white font-semibold">Aku Bikinkan</span>."
                            </p>
                            <p>
                                Dari kalimat tulus "Aku bikinkan ya situsnya", lalu disingkat jadi "Ku Bikin", hingga akhirnya berevolusi jadi <span className="text-blue-400 font-bold">Cubiqin</span>. Brand ini adalah janji kami buat ngebantu siapa pun yang pengen punya 'rumah digital' yang estetik tanpa ribet.
                            </p>
                        </div>

                        <div className="flex gap-10 md:gap-16 pt-4">
                            <div>
                                <div className="text-3xl md:text-5xl font-bold text-[#fafafa]">100%</div>
                                <div className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase mt-2">Komitmen Norma</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-5xl font-bold text-[#fafafa]">Zero</div>
                                <div className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase mt-2">Basa-Basi Teknis</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[#27272a]">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                                alt="Cubiqin Studio Vibes"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                            {/* Floating Elements */}
                            <div className="absolute top-10 left-10 p-4 bg-[#0a0a0a] border border-[#27272a] rounded-2xl shadow-2xl animate-bounce duration-[3000ms]">
                                <ShieldCheck className="text-green-500" size={24} />
                            </div>
                            <div className="absolute bottom-10 right-10 p-4 bg-[#111] border border-[#27272a] rounded-2xl shadow-2xl animate-pulse">
                                <Sparkles className="text-yellow-500" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manifesto Section */}
                <section className="mt-32 md:mt-56 p-10 md:p-24 rounded-[3rem] bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#27272a] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px]"></div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            "Membangun Situs Estetik <br />
                            <span className="text-blue-500">Bukan Berarti Melanggar Etika.</span>"
                        </h2>
                        <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
                        <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
                            Kami di Cubiqin bersedia membuatkan website atau aplikasi apa pun yang klien inginkan—selama tidak melanggar norma dan hukum yang berlaku. Kami percaya digitalisasi harus membawa dampak positif, bukan sebaliknya. Itu adalah prinsip harga mati kami.
                        </p>
                    </div>
                </section>

                {/* Core Values Grid */}
                <section className="mt-32 md:mt-48 space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">DNA Kami</h2>
                        <p className="text-[#a1a1aa]">Alasan kenapa Cubiqin beda dari yang lain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <ShieldCheck size={32} />, title: "Integritas", desc: "Patuh pada norma dan etika adalah pondasi utama kami berkarya." },
                            { icon: <Sparkles size={32} />, title: "Vibes Estetik", desc: "Sesuai tagline kami, setiap pixel harus punya value visual yang premium." },
                            { icon: <Zap size={32} />, title: "Kebut Ngebut", desc: "Proses development yang efisien tanpa mengorbankan kualitas." },
                            { icon: <Users2 size={32} />, title: "Partner-Centric", desc: "Kami tidak sekadar vendor, tapi partner diskusi untuk mimpi Anda." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-[#111]/50 border border-[#27272a] hover:border-blue-500/40 transition-all hover:-translate-y-2 group">
                                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mt-32 md:mt-56 text-center space-y-10">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Kapan Kita <br className="md:hidden" /> <span className="text-[#a1a1aa]">Eksekusi?</span></h2>
                    <button
                        onClick={() => window.open('https://wa.me/6283135183093?text=Halo%20Cubiqin!%20Saya%20ingin%20diskusi%20proyek%20setelah%20baca%20About%20Us.', '_blank')}
                        className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold tracking-widest uppercase hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20"
                    >
                        Gas Diskusi Sekarang <ChevronRight size={20} />
                    </button>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
