'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { ChevronRight, CheckCircle2, MessageCircle, HelpCircle, Star } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

interface ServicePageProps {
    title: string;
    subtitle: string;
    accentColor: string; // e.g., 'blue-600', 'teal-500'
    imagePath: string;
    philosophy: string;
    painPoint: string;
    solution: string;
    processSteps: string[];
    faqs: FAQ[];
    testimonial: {
        quote: string;
        author: string;
    };
    ctaText: string;
}

export default function ServicePage({
    title,
    subtitle,
    accentColor,
    imagePath,
    philosophy,
    painPoint,
    solution,
    processSteps,
    faqs,
    testimonial,
    ctaText
}: ServicePageProps) {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={imagePath}
                        alt={title}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a1a1aa]">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Philosophy / Intro */}
            <section className="py-24 px-6 border-b border-[#18181b]">
                <div className="max-w-4xl mx-auto">
                    <div className={`w-12 h-1 bg-${accentColor} mb-8`} />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Filosofi & Akar Cerita</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-[#a1a1aa] leading-relaxed">
                        {philosophy.split('\n\n').map((para, i) => (
                            <p key={i} className="mb-6">{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pain Point Section */}
            <section className="py-24 px-6 bg-[#0f0f0f] border-b border-[#18181b]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Mungkin Anda Merasakan Ini...</h2>
                        <p className="text-[#a1a1aa] leading-relaxed italic">
                            "{painPoint}"
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#27272a] bg-[#18181b] flex items-center justify-center">
                        {/* Abstract Visual Placeholder */}
                        <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-black to-transparent" />
                        <HelpCircle size={48} className="text-[#27272a]" />
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 px-6 border-b border-[#18181b]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Solusi Manusiawi Kami</h2>
                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#18181b] to-black border border-[#27272a]">
                        <p className="text-lg md:text-xl text-[#fafafa] leading-relaxed">
                            {solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Proses Kerja Kami</h2>
                    <p className="text-[#a1a1aa]">Minimalis, transparan, dan terukur.</p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {processSteps.map((step, i) => (
                        <div key={i} className="relative p-8 rounded-3xl bg-[#18181b] border border-[#27272a] hover:border-[#a1a1aa] transition-colors group">
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                                {i + 1}
                            </div>
                            <h4 className="text-lg font-bold mb-3">{step}</h4>
                            <p className="text-sm text-[#a1a1aa]">Setiap langkah dilakukan dengan penuh dedikasi untuk hasil terbaik.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 px-6 bg-[#0f0f0f] border-y border-[#18181b]">
                <div className="max-w-3xl mx-auto text-center">
                    <Star size={32} className={`mx-auto mb-8 text-${accentColor}`} />
                    <blockquote className="text-2xl md:text-3xl font-medium tracking-tight leading-snug italic text-[#fafafa] mb-10">
                        "{testimonial.quote}"
                    </blockquote>
                    <p className="font-bold tracking-widest uppercase text-xs text-[#a1a1aa]">
                        — {testimonial.author}
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Pertanyaan yang Sering Diajukan</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a]">
                                <h4 className="font-bold mb-2 flex items-center gap-3">
                                    <MessageCircle size={18} className="text-blue-500" />
                                    {faq.question}
                                </h4>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed ml-7">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-blue-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 italic">
                        "Mari kita buat sesuatu yang berkesan bersama-sama."
                    </h2>
                    <p className="text-lg text-[#a1a1aa] mb-12 max-w-xl mx-auto">
                        {ctaText}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="/contact"
                            className="px-10 py-5 rounded-full bg-white text-black font-bold tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all shadow-2xl"
                        >
                            Hubungi Kami Sekarang
                        </a>
                        <a
                            href="https://wa.me/6283135183093"
                            target="_blank"
                            className="flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-colors underline underline-offset-8"
                        >
                            Chat via WhatsApp <ChevronRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
