'use client';

import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-16 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* PT Cubiqin Section 1 */}
                    <div className="space-y-6">
                        <h3 className="font-extrabold text-[15px] uppercase tracking-wider">PT. Cubiqin Situs Estetik</h3>
                        <div className="space-y-4 text-[13px] leading-relaxed">
                            <div className="flex gap-4">
                                <MapPin size={18} className="text-blue-600 shrink-0" />
                                <p className="text-gray-600">Samarinda, Kalimantan Timur</p>
                            </div>
                            <div className="flex gap-4">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <p className="text-gray-600">+62 831 3518 3093</p>
                            </div>
                            <div className="flex gap-4">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <p className="text-gray-600">hello@cubiqin.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder or Second HQ if still needed, otherwise empty space or info */}
                    <div className="space-y-6">
                        <h3 className="font-extrabold text-[15px] uppercase tracking-wider invisible md:visible opacity-0 md:opacity-100 h-0 md:h-auto">About</h3>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                            Solusi digital estetik dan profesional untuk bisnis masa kini. Kami siap mewujudkan impian digital Anda dengan integritas penuh.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="font-extrabold text-[15px] uppercase tracking-wider invisible md:visible opacity-0 md:opacity-100 h-0 md:h-auto">Links</h3>
                        <ul className="space-y-4 text-[15px] font-extrabold">
                            <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                            <li><a href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                            <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="font-extrabold text-[15px] uppercase tracking-wider invisible md:visible opacity-0 md:opacity-100 h-0 md:h-auto">Services</h3>
                        <ul className="space-y-4 text-[15px] font-extrabold">
                            <li><a href="/services/website" className="hover:text-blue-600 transition-colors">Jasa Pembuatan Website</a></li>
                            <li><a href="/services/android" className="hover:text-blue-600 transition-colors">Jasa Pembuatan Aplikasi Android</a></li>
                            <li><a href="/services/digital-marketing" className="hover:text-blue-600 transition-colors">Jasa Digital Marketing</a></li>
                            <li><a href="/services/social-media" className="hover:text-blue-600 transition-colors">Jasa Desain & Kelola Sosial Media</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-4">
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-pink-600 transition-all">
                            <Instagram size={20} />
                        </a>
                        {/* TikTok */}
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#ff0050] transition-all">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                        </a>
                    </div>

                    <div className="text-gray-500 text-[14px] font-medium tracking-tight">
                        &copy; 2026 - PT. Cubiqin Situs Estetik. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
