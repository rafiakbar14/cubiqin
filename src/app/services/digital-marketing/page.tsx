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
            imagePath="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
            painPointImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            philosophy={`"Banyak orang bisa pasang iklan, tapi sedikit yang bisa mengarahkan iklan tersebut menjadi investasi yang menguntungkan. Di Cubiqin, kami tidak hanya 'pasang iklan', kami membangun jembatan antara solusi Anda dan orang yang memang sedang mencarinya di Google maupun scroll di Meta."`}
            painPoint="Mungkin Anda pernah merasa uang marketing 'habis begitu saja' tanpa hasil nyata. Strategi yang ngawur, targeting yang meleset, atau konten iklan yang tidak relevan adalah penyebab utama mengapa ads seringkali gagal memberikan ROI positif."
            solution="Kami hadir untuk memandu Anda 100%. Mulai dari riset audiens yang presisi, penyusunan strategi budgetting agar tidak boncos, pembuatan konten kreatif yang memancing klik, hingga evaluasi hasil harian yang transparan. Pokoknya, Anda tinggal terima beres, kami yang kawal prosesnya."
            processSteps={[
                'Riset Search Intent & Audiens Behavior',
                'Penyusunan Strategi Budgetting & Targeting',
                'Pembuatan Konten Iklan & Copywriting',
                'Evaluasi & Daily Optimization'
            ]}
            faqs={[
                {
                    question: "Berapa minimal budget iklannya?",
                    answer: "Kita bisa mulai dari budget minimalis mulai Rp 20.000 per hari. Nilainya tentu akan menyesuaikan dengan tingkat kerumitan industri dan target jangkauan yang ingin dicapai."
                },
                {
                    question: "Apa bedanya Meta Ads dan Google Ads di Cubiqin?",
                    answer: "Meta Ads (IG/FB) fokus pada memicu minat audiens lewat konten visual, sedangkan Google Ads fokus mempertemukan produk Anda dengan orang yang memang sedang AKTIF MENCARI di Google Search. Kami kawal keduanya!"
                }
            ]}
            testimonial={{
                quote: "Strategi targeting Cubiqin sangat tajam. Budget ads saya yang dulunya boncos, sekarang berubah jadi aliran leads yang berkualitas setiap harinya.",
                author: "Budi, Property Consultant"
            }}
            ctaText="Mari pertemukan produk Anda dengan calon pelanggan yang tepat hari ini. Hubungi kami untuk konsultasi strategi iklan yang paling efisien untuk bisnis Anda."
        />
    );
}
