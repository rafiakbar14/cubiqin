import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cubiqin - Jasa Digital Marketing Strategy',
};

export default function MarketingService() {
    return (
        <ServicePage
            title="Digital Marketing"
            subtitle="Iklan yang Menemukan Pelanggan, Bukan Sekadar Menghabiskan Budget."
            accentColor="purple-500"
            imagePath="/assets/imagery/marketing-hero.png"
            painPointImage="/assets/imagery/marketing-pain.png"
            philosophy={`Memasang iklan secara teknis memang mudah. Namun memastikan setiap rupiah anggaran iklan menghasilkan nilai nyata bagi bisnis—itu adalah sebuah seni yang membutuhkan data, strategi, dan pengalaman.\n\nDi Cubiqin, kami tidak sekadar 'menjalankan iklan'. Kami membangun jembatan yang presisi antara solusi yang Anda tawarkan dan audiens yang memang sedang mencarinya—baik di Google Search maupun di platform Meta (Instagram & Facebook).`}
            painPoint="Banyak pemilik bisnis pernah mengalami anggaran iklan yang habis tanpa hasil yang sepadan. Ini hampir selalu disebabkan oleh tiga hal: targeting yang terlalu luas, pesan iklan yang tidak relevan, atau ketidakmampuan membaca data untuk melakukan optimasi yang tepat waktu."
            solution="Kami mengelola seluruh siklus iklan digital Anda—mulai dari riset audiens yang berbasis data, penyusunan strategi alokasi anggaran yang terukur, pembuatan aset kreatif yang memancing klik berkualitas, hingga evaluasi dan optimasi harian yang transparan. Anda dapat berfokus pada operasional bisnis sementara kami memastikan mesin akuisisi digital Anda berjalan optimal."
            solutionTitle="Solusi yang kami sarankan"
            processSteps={[
                'Riset Search Intent & Audiens Behavior',
                'Penyusunan Strategi Budgetting & Targeting',
                'Pembuatan Konten Iklan & Copywriting',
                'Evaluasi & Daily Optimization'
            ]}
            faqs={[
                {
                    question: "Berapa anggaran minimal untuk mulai beriklan?",
                    answer: "Kami dapat memulai strategi dari anggaran iklan Rp 20.000 per hari. Namun efektivitasnya akan sangat bergantung pada tingkat persaingan industri dan target jangkauan yang ingin dicapai. Kami selalu berdiskusi untuk menemukan titik optimal antara anggaran dan target bisnis Anda."
                },
                {
                    question: "Apa perbedaan Meta Ads dan Google Ads dalam strategi Cubiqin?",
                    answer: "Meta Ads (Instagram/Facebook) unggul dalam memicu ketertarikan audiens melalui konten visual yang menarik. Google Ads bekerja lebih presisi dengan mempertemukan produk Anda kepada pengguna yang sedang aktif mencari solusi serupa di mesin pencari. Keduanya memiliki peran strategis yang berbeda, dan kami mengelola kedua platform tersebut."
                }
            ]}
            testimonial={{
                quote: "Strategi targeting Cubiqin sangat tajam. Budget ads saya yang dulunya boncos, sekarang berubah jadi aliran leads yang berkualitas setiap harinya.",
                author: "Budi, Property Consultant"
            }}
            ctaText="Jadikan setiap anggaran iklan Anda sebagai investasi yang terukur dan dapat dipertanggungjawabkan. Hubungi kami untuk memulai sesi konsultasi strategi iklan digital yang disesuaikan dengan karakteristik bisnis Anda."
        />
    );
}
