'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Monitor, Rocket, Smartphone, Share2 } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            name: 'Pembuatan Website',
            description: 'Situs estetik & arsitektur web modern.',
            href: '/services/website',
            icon: <Monitor size={20} className="text-blue-500" />
        },
        {
            name: 'Aplikasi Android',
            description: 'Solusi mobile sat-set untuk bisnis Anda.',
            href: '/services/android',
            icon: <Smartphone size={20} className="text-teal-500" />
        },
        {
            name: 'Digital Marketing',
            description: 'Target presisi lewat Meta & Google Ads.',
            href: '/services/digital-marketing',
            icon: <Rocket size={20} className="text-purple-500" />
        },
        {
            name: 'Sosial Media',
            description: 'Kelola feed estetik & bangun komunitas.',
            href: '/services/social-media',
            icon: <Share2 size={20} className="text-pink-500" />
        },
    ];

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang', href: '/about' },
        { name: 'Portofolio', href: '/portfolio' },
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
                        <a href="/" className="text-sm font-bold tracking-[0.2em] text-[#fafafa] hover:text-blue-500 transition-colors uppercase">
                            Cubiq<span className="text-blue-500">in</span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex gap-8 items-center">
                            {navLinks.slice(0, 3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] hover:text-[#fafafa] transition-colors uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Dropdown Services */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors uppercase">
                                    Layanan <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-[#18181b] border border-[#27272a] rounded-2xl p-6 shadow-2xl transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="grid grid-cols-2 gap-4">
                                        {services.map((service) => (
                                            <a
                                                key={service.name}
                                                href={service.icon ? service.href : '#'} // Use the href if icon exists
                                                className="flex flex-col gap-3 p-4 rounded-xl hover:bg-[#27272a] transition-all group/item"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[#27272a] group-hover/item:bg-[#18181b] flex items-center justify-center transition-colors">
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">{service.name}</h4>
                                                    <p className="text-[#a1a1aa] text-[10px] leading-relaxed">{service.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {navLinks.slice(3).map((link) => (
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
                            className="hidden sm:inline-block px-5 py-2.5 rounded-xl bg-[#fafafa] text-[#0a0a0a] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all shadow-lg"
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
                <div className="flex flex-col items-center justify-center min-h-full py-24 gap-6 px-6 overflow-y-auto">
                    {navLinks.slice(0, 3).map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold tracking-tighter text-[#fafafa] hover:text-blue-500 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Services Section */}
                    <div className={`w-full max-w-xs space-y-4 transition-all duration-500 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase text-center">Layanan Kami</p>
                        <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                                <a
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#18181b] border border-[#27272a]"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#27272a] flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <span className="text-white font-bold text-xs uppercase tracking-wider">{service.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {navLinks.slice(3).map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold tracking-tighter text-[#fafafa] hover:text-blue-500 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${(idx + 5) * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`mt-4 px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-xs tracking-widest uppercase transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: `${(navLinks.length + 5) * 50}ms` }}
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </>
    );
}
