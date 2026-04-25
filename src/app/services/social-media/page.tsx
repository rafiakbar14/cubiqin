import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cubiqin - Jasa Desain & Kelola Sosial Media',
};

export default function SocialMediaService() {
    return (
        <ServicePage
            title="Sosial Media & Desain"
            subtitle="Feed Estetik, Konten Strategik, Bisnis Makin Otentik."
            accentColor="pink-500"
            imagePath="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000"
            painPointImage="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=2000"
            philosophy={`"Sosial media bukan sekadar tempat pamer produk. Di Cubiqin, kami memandang Instagram sebagai wajah digital yang harus bernapas dan berinteraksi. Kami menggabungkan keahlian desain high-end dengan manajemen konten yang konsisten agar brand Anda selalu relevan di mata audiens."`}
            painPoint="Masalah pemilik bisnis biasanya bukan 'tidak punya foto', tapi tidak punya WAKTU untuk meriset tren, membuat desain yang estetik secara konsisten, hingga mengatur jadwal posting yang optimal."
            solution="Tim kami mengambil alih seluruh beban kreatif Anda. Mulai dari curah ide konten yang 'relatable', pembuatan desain visual yang premium, penjadwalan posting otomatis, hingga evaluasi strategi bulanan untuk memastikan jangkauan brand Anda terus bertumbuh."
            processSteps={[
                'Research & Ideasi Konten Kreatif',
                'Produksi Desain Visual & Copywriting',
                'Scheduling (Penjadwalan Posting)',
                'Evaluasi & Strategic Monthly Review'
            ]}
            faqs={[
                {
                    question: "Adminnya dari Cubiqin juga?",
                    answer: "Fokus utama kami adalah pada Manajemen Konten (Ide, Desain, Scheduling). Untuk interaksi CS/Sales, tetap kami rekomendasikan dari internal Anda agar info produk tetap akurat, namun kami pandu di ssi strateginya."
                },
                {
                    question: "Dapat berapa postingan sebulan?",
                    answer: "Kita akan menyusun kalender konten yang seimbang antara edukasi, jualan, dan hiburan. Detail frekuensinya bisa kita sesuaikan dengan target dan budget brand Anda."
                }
            ]}
            testimonial={{
                quote: "Sejak feed dikelola Cubiqin, brand awareness kami naik drastis. Desainnya benar-benar beda dan terasa sangat personal buat customer kami.",
                author: "Santi, Fashion Boutique Owner"
            }}
            ctaText="Mari hidupkan identitas visual bisnis Anda hari ini. Hubungi kami untuk mulai merancang strategi konten yang bikin kompetitor melirik."
        />
    );
}
