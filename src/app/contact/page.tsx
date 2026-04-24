'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Landing Page',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = '6281234567890';
        const text = `Halo Cubiqin! Nama saya ${formData.name}. Saya tertarik dengan layanan ${formData.service}. \n\nDetail: ${formData.message}`;
        const encodedText = encodeURIComponent(text);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    <div className="space-y-10 md:space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Kontak</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                                Mari <br className="hidden md:block" />
                                <span className="text-[#a1a1aa]">Bicara.</span>
                            </h1>
                            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-md">
                                Hubungi kami hari ini untuk konsultasi gratis mengenai proyek digital Anda selanjutnya.
                            </p>
                        </div>

                        <div className="space-y-8 md:space-y-10">
                            <div className="flex gap-6 md:gap-8 items-start group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#111] border border-[#27272a] rounded-2xl flex items-center justify-center text-[#fafafa] group-hover:border-blue-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-[10px] md:text-sm font-bold text-[#fafafa] tracking-widest uppercase mb-1">WhatsApp</h3>
                                    <p className="text-base md:text-lg text-[#a1a1aa]">+62 812 3456 7890</p>
                                </div>
                            </div>
                            <div className="flex gap-6 md:gap-8 items-start group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#111] border border-[#27272a] rounded-2xl flex items-center justify-center text-[#fafafa] group-hover:border-blue-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-[10px] md:text-sm font-bold text-[#fafafa] tracking-widest uppercase mb-1">Email</h3>
                                    <p className="text-base md:text-lg text-[#a1a1aa]">hello@cubiqin.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-30"></div>
                        <div className="relative bg-[#0a0a0a] border border-[#27272a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[9px] md:text-[10px] font-bold text-[#52525b] tracking-[0.2em] uppercase ml-2">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 md:px-6 py-3 md:py-4 bg-[#111] border border-[#27272a] rounded-xl md:rounded-2xl text-[#fafafa] focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder-[#3f3f46] text-sm"
                                        placeholder="E.g. John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="service" className="text-[9px] md:text-[10px] font-bold text-[#52525b] tracking-[0.2em] uppercase ml-2">Pilih Layanan</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-5 md:px-6 py-3 md:py-4 bg-[#111] border border-[#27272a] rounded-xl md:rounded-2xl text-[#fafafa] focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                                    >
                                        <option>Landing Page</option>
                                        <option>Company Profile</option>
                                        <option>E-Commerce</option>
                                        <option>Custom Web App</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-[9px] md:text-[10px] font-bold text-[#52525b] tracking-[0.2em] uppercase ml-2">Detail Proyek</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 md:px-6 py-3 md:py-4 bg-[#111] border border-[#27272a] rounded-xl md:rounded-2xl text-[#fafafa] focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none placeholder-[#3f3f46] text-sm"
                                        placeholder="Beri tahu kami tantangan Anda..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 md:py-5 bg-[#fafafa] text-[#0a0a0a] rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-3 group shadow-xl shadow-white/5"
                                >
                                    Kirim ke WhatsApp
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-[#27272a] py-12 md:py-16 px-6 mt-16 md:mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="text-sm font-bold tracking-widest text-[#52525b] uppercase text-center md:text-left">Cubiqin © 2026</div>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#52525b] hover:text-[#fafafa] transition-colors uppercase">Instagram</a>
                        <a href="#" className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#52525b] hover:text-[#fafafa] transition-colors uppercase">Dribbble</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
