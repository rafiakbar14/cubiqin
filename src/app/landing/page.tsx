'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const pricingLevels = [
    {
        name: 'Landing Page',
        price: 'Rp 499rb',
        description: 'Solusi tercepat untuk promosi produk atau jasa Anda.',
        pages: '1 Halaman',
        features: [
            'Desain Modern & Responsif',
            'Integrasi WhatsApp Messenger',
            'SEO Dasar / Google Ready',
            'Hosting & Domain 1 Tahun',
            'Pengerjaan 1-3 Hari'
        ],
        highlight: false,
        cta: 'Pesan Landing Page'
    },
    {
        name: 'Website Bisnis',
        price: 'Rp 1.2jt',
        description: 'Profil profesional lengkap untuk meningkatkan kredibilitas.',
        pages: '3 Halaman',
        features: [
            'Halaman Utama, About, Layanan',
            'Desain Premium Custom',
            'Kecepatan Super Optimized',
            'Form Kontak & WhatsApp',
            'Pengerjaan 3-7 Hari'
        ],
        highlight: true,
        cta: 'Pesan Website 3 Hal'
    },
    {
        name: 'Custom Web Dev',
        price: 'Mulai Rp 3jt',
        description: 'Sistem web khusus sesuai kebutuhan spesifik bisnis Anda.',
        pages: 'Unlimited',
        features: [
            'Fitur & Sistem Kompleks',
            'E-commerce / Dashboard',
            'UI/UX Design Eksklusif',
            'Maintenance Prioritas',
            'Konsultasi Intensif'
        ],
        highlight: false,
        cta: 'Konsultasi Custom'
    }
];

export default function AdsLandingPage() {
    const handleOrder = (level: string) => {
        const phoneNumber = '6281234567890';
        const text = `Halo Cubiqin! Saya tertarik dengan paket *${level}*. Bisa bantu jelaskan proses awalnya?`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                {/* Hero Section */}
                <div className="text-center space-y-8 mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Solusi Web No. 1</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                        Website Bagus <br className="hidden md:block" />
                        <span className="text-[#a1a1aa]">Gak Harus Mahal.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto px-4">
                        Hadirkan bisnis Anda di dunia digital dengan tampilan premium yang meningkatkan konversi penjualan.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full md:w-auto px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                        >
                            Cek Daftar Harga
                        </button>
                        <a href="/portfolio" className="text-sm font-bold tracking-widest text-[#fafafa] hover:text-blue-400 p-4 transition-colors uppercase">Lihat Portofolio</a>
                    </div>
                </div>

                {/* Pricing Section */}
                <section id="pricing" className="space-y-16 md:space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#fafafa]">Pilih Paket Bisnis</h2>
                        <p className="text-[#a1a1aa] text-base md:text-lg">Transparan. Tanpa Biaya Tersembunyi.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pricingLevels.map((level, idx) => (
                            <div
                                key={idx}
                                className={`relative p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border transition-all duration-500 flex flex-col ${level.highlight
                                    ? 'bg-[#111] border-blue-500/50 shadow-2xl shadow-blue-500/10 md:scale-105 z-10'
                                    : 'bg-[#0a0a0a] border-[#27272a] hover:border-[#3f3f46]'
                                    }`}
                            >
                                {level.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                                        Paling Populer
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase mb-2">{level.pages}</div>
                                    <h3 className="text-2xl font-bold text-[#fafafa] mb-2">{level.name}</h3>
                                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{level.description}</p>
                                </div>

                                <div className="mb-10">
                                    <div className="text-4xl font-bold text-[#fafafa]">{level.price}</div>
                                    <div className="text-[10px] font-bold text-[#52525b] uppercase mt-1 tracking-widest">Sekali Bayar</div>
                                </div>

                                <ul className="space-y-4 mb-12 flex-grow">
                                    {level.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-3 text-sm text-[#a1a1aa] items-center text-left">
                                            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleOrder(level.name)}
                                    className={`w-full py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all ${level.highlight
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-[#18181b] text-[#fafafa] hover:bg-[#27272a]'
                                        }`}
                                >
                                    {level.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Accent */}
                <div className="mt-24 md:mt-40 p-10 md:p-24 rounded-3xl md:rounded-[3rem] bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#27272a] text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px]"></div>

                    <h2 className="text-3xl md:text-6xl font-bold text-[#fafafa] leading-tight">
                        Punya Proyek <br className="hidden md:block" /> <span className="text-[#a1a1aa]">Luar Biasa?</span>
                    </h2>
                    <p className="text-[#a1a1aa] text-base md:text-lg max-w-lg mx-auto">
                        Mari kolaborasi untuk membawa bisnis Anda ke level berikutnya.
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => handleOrder('Custom Project')}
                            className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#fafafa] text-[#0a0a0a] rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all"
                        >
                            Mulai Konsultasi
                        </button>
                    </div>
                </div>
            </main>

            {/* CTA Footer */}
            <section className="bg-blue-600 py-20 md:py-32 px-6 text-center space-y-8">
                <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                    Masih Bingung? <br className="hidden md:block" /> Konsultasi Gratis Sekarang.
                </h2>
                <button
                    onClick={() => handleOrder('Konsultasi Gratis')}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-[#0a0a0a] text-white rounded-2xl font-bold text-base md:text-lg tracking-widest uppercase hover:scale-105 transition-transform shadow-2xl"
                >
                    WhatsApp Kami
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
            </section>

            <footer className="border-t border-[#27272a] py-12 md:py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="text-sm font-bold tracking-widest text-[#52525b] uppercase text-center md:text-left">Cubiqin © 2026</div>
                    <div className="text-[10px] md:text-[11px] text-[#52525b] uppercase tracking-widest italic">Est. in Indonesia</div>
                </div>
            </footer>
        </div>
    );
}
