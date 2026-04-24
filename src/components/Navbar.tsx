'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang', href: '/about' },
        { name: 'Portofolio', href: '/portfolio' },
        { name: 'Layanan', href: '/landing' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 md:py-5 border-b ${scrolled || isOpen
                    ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-[#27272a]'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <a href="/" className="text-sm font-bold tracking-[0.2em] text-[#a1a1aa] hover:text-[#fafafa] transition-colors uppercase">
                            Cubiq<span className="text-blue-500">in</span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] hover:text-[#fafafa] transition-colors uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="/contact"
                            className="hidden sm:inline-block px-5 py-2.5 rounded-xl bg-[#fafafa] text-[#0a0a0a] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all"
                        >
                            Hubungi Kami
                        </a>

                        {/* Burger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-2 md:hidden flex flex-col gap-1.5 z-[110]"
                            aria-label="Toggle Menu"
                        >
                            <div className={`w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[90] bg-[#0a0a0a] transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-3xl font-bold tracking-tighter text-[#fafafa] hover:text-blue-500 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`mt-4 px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-sm tracking-widest uppercase transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                    >
                        Mulai Sekarang
                    </a>
                </div>
            </div>
        </>
    );
}
