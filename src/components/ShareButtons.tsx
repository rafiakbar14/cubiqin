'use client';

import React from 'react';
import { Share2, Link as LinkIcon, Twitter, Linkedin, Send } from 'lucide-react';

interface ShareButtonsProps {
    url: string;
    title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : '';

    const shareLinks = [
        {
            name: 'WhatsApp',
            icon: <Send className="w-4 h-4" />,
            href: `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
            color: 'hover:bg-green-600',
        },
        {
            name: 'Twitter',
            icon: <Twitter className="w-4 h-4" />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
            color: 'hover:bg-blue-400',
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-4 h-4" />,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
            color: 'hover:bg-blue-700',
        },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Tautan berhasil disalin!');
    };

    return (
        <div className="flex flex-col gap-6 py-12 border-y border-[#18181b] my-16">
            <div className="flex items-center gap-3">
                <Share2 className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a1a1aa]">Bagikan Artikel</span>
            </div>

            <div className="flex flex-wrap gap-4">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-[#111] border border-[#27272a] text-sm font-medium transition-all duration-300 ${link.color} hover:border-transparent group`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}

                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#111] border border-[#27272a] text-sm font-medium transition-all duration-300 hover:bg-[#222] group"
                >
                    <LinkIcon className="w-4 h-4" />
                    <span>Salin Tautan</span>
                </button>
            </div>
        </div>
    );
}
