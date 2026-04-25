import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const projects = [
    {
        title: 'E-Commerce Solution',
        category: 'Web App',
        description: 'Platform jual beli modern dengan performa tinggi.',
        gradient: 'from-blue-500/20 to-indigo-600/20',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000'
    },
    {
        title: 'Corporate Landing Page',
        category: 'SaaS',
        description: 'Meningkatkan konversi dengan desain minimalis.',
        gradient: 'from-purple-500/20 to-pink-600/20',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    },
    {
        title: 'Personal Branding',
        category: 'Portfolio',
        description: 'Menonjolkan keunikan diri melalui visual interaktif.',
        gradient: 'from-emerald-500/20 to-teal-600/20',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2000'
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
                <div className="text-center space-y-6 mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Portofolio</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[#fafafa]">
                        Cerita di Balik <br className="hidden md:block" />
                        Setiap <span className="text-[#a1a1aa]">Karya.</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#a1a1aa] max-w-xl mx-auto px-2">
                        Setiap hasil karya di sini adalah cerita tentang bagaimana kami tumbuh bersama klien. Kami menghargai setiap detail kecil untuk memastikan hasil yang bukan cuma bagus dilihat, tapi juga fungsional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-[#111] border border-[#27272a] hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className={`relative aspect-[4/3] md:aspect-[16/10] bg-[#111] overflow-hidden`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                        <div className="text-white opacity-5 scale-[4] md:scale-[5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                            </div>

                            <div className="p-8 md:p-10 space-y-4">
                                <div className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] opacity-80">{project.category}</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa] leading-tight">{project.title}</h3>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.description}</p>

                                <div className="pt-4 md:pt-6">
                                    <button className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-[#fafafa] uppercase tracking-widest group/btn hover:text-blue-400 transition-colors">
                                        Detail Proyek
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 md:mt-40 p-10 md:p-24 rounded-3xl md:rounded-[3rem] bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#27272a] text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/5 blur-[100px] md:blur-[120px]"></div>

                    <h2 className="text-3xl md:text-6xl font-bold text-[#fafafa] leading-[1.1]">
                        Punya Proyek <br className="hidden md:block" /> <span className="text-[#a1a1aa]">Luar Biasa?</span>
                    </h2>
                    <p className="text-[#a1a1aa] text-base md:text-lg max-w-lg mx-auto">
                        Mari kolaborasi untuk membawa bisnis Anda ke level berikutnya.
                    </p>
                    <div className="pt-4 md:pt-6">
                        <a
                            href="/contact"
                            className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#fafafa] text-[#0a0a0a] rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
