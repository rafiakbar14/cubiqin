import React from 'react';
import ServicePage from '@/components/ServicePage';

export default function MarketingService() {
    return (
        <ServicePage
            title="Digital Marketing"
            subtitle="Menemukan Pelanggan yang Tepat di Waktu yang Pas."
            accentColor="purple-500"
            imagePath="/brain/3f110339-f694-405b-8f1f-5b7fcab8a4b2/digital_marketing_cover_1777082746482.png"
            philosophy={`"Marketing seringkali punya reputasi buruk sebagai hal yang 'mengganggu' atau 'memaksa'. Di Cubiqin, kami percaya marketing yang bagus adalah marketing yang terasa seperti sebuah rekomendasi dari teman yang peduli. Kami menghubungkan solusi Anda ke orang yang memang sedang membutuhkannya."`}
            painPoint="Banyak pemilik bisnis merasa seperti 'membuang uang ke laut' saat memasang iklan digital. Angka-angka teknis yang rumit, target audiens yang tidak tepat sasaran, seringkali membuat budget marketing Anda habis tanpa hasil penjualan nyata."
            solution="Kami mengelola budget marketing Anda layaknya uang kami sendiri. Kami melakukan riset psikologi audiens, memetakan apa yang mereka rasakan. Dengan Meta Ads dan Google Ads, kami memastikan iklan Anda tampil di depan orang yang tepat."
            processSteps={['Audiens Research', 'Creative Ad Drafting', 'Daily Optimization (Scaling)']}
            faqs={[
                {
                    question: "Berapa minimal budget iklannya?",
                    answer: "Kita bisa mulai dari budget yang nyaman buat Anda. Yang penting adalah konsistensi dan testing yang tepat. Kami akan pandu Anda agar tidak boros."
                },
                {
                    question: "Hasilnya langsung kelihatan besok?",
                    answer: "Dunia marketing adalah maraton, bukan sprint. Tapi biasanya dalam 1-2 minggu pertama kita sudah bisa melihat pola audiens yang positif."
                }
            ]}
            testimonial={{
                quote: "Dulu saya ragu pasang ads karena sering rugi. Sejak dikelola Cubiqin, ROAS bisnis saya stabil di angka yang sangat menguntungkan!",
                author: "Budi, Sales Manager Property Samarinda"
            }}
            ctaText="Mari berhenti menebak-nebak strategi marketing Anda. Yuk, kita duduk bareng, kita lihat data bisnis Anda, dan kita susun rencana iklan yang paling efisien."
        />
    );
}
