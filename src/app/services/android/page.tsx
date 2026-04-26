import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cubiqin - Jasa Pembuatan Aplikasi Android Solutions',
};

export default function AndroidService() {
    return (
        <ServicePage
            title="Mobile Solutions"
            subtitle="Membawa Bisnis Anda ke Dalam Genggaman Pelanggan."
            accentColor="teal-500"
            imagePath="/assets/imagery/mobile-hero.png"
            painPointImage="/assets/imagery/mobile-pain.png"
            philosophy={`Di era mobile-first ini, smartphone adalah perangkat utama yang menemani keseharian pelanggan Anda. Memiliki aplikasi Android berarti bisnis Anda hadir secara konsisten di genggaman mereka—bukan sekadar sebagai shortcut, melainkan sebagai layanan yang benar-benar memudahkan hidup mereka.\n\nSesuai filosofi 'Aku Bikinkan', kami membangun setiap aplikasi dengan pendekatan user-centric yang mendalam: memahami siapa penggunanya, apa kebutuhannya, dan bagaimana desain dapat menjawabnya dengan cara yang paling elegan.`}
            painPoint="Tantangan terbesar dalam retensi pelanggan adalah memastikan mereka kembali. Tanpa aplikasi, bisnis Anda bergantung pada pengunjung yang mengingat URL website Anda. Dengan aplikasi, Anda dapat menyapa mereka secara proaktif melalui notifikasi yang personal dan relevan—membangun loyalitas yang konsisten."
            solution="Kami membangun aplikasi Android dengan fokus pada User Journey yang mulus. Setiap fitur dirancang agar pengguna dapat menyelesaikan tujuan mereka—bertransaksi, mendapatkan informasi, atau berinteraksi dengan layanan Anda—dalam langkah yang seminimal mungkin. Antarmuka yang bersih dan navigasi yang intuitif adalah standar kami, bukan pilihan."
            solutionTitle="Solusi yang kami sarankan"
            processSteps={['Riset & Analisis User Journey', 'Desain UI/UX Terstruktur', 'Development & Testing', 'Rilis di Play Store & Dukungan Pasca-Rilis']}
            faqs={[
                {
                    question: "Apakah pengembangan aplikasi Android membutuhkan biaya yang besar?",
                    answer: "Investasi dalam aplikasi adalah tentang efisiensi jangka panjang. Dengan memiliki saluran komunikasi langsung ke pelanggan, biaya akuisisi dan retensi dapat ditekan secara signifikan. Kami menyediakan solusi yang dapat disesuaikan dengan anggaran Anda."
                },
                {
                    question: "Apakah ukuran aplikasinya akan membebani penyimpanan pengguna?",
                    answer: "Tidak. Kami melakukan optimasi menyeluruh agar aplikasi tetap ringan namun tetap kaya fitur. Performa dan kenyamanan pengguna akhir selalu menjadi prioritas dalam setiap keputusan teknis kami."
                }
            ]}
            testimonial={{
                quote: "Setelah punya aplikasi dari Cubiqin, jumlah orderan repeat pelanggan saya naik drastis. Notifikasi promonya beneran ngebantu!",
                author: "Andi, Owner Kedai Kopi Nusantara"
            }}
            ctaText="Punya ide fitur yang ingin Anda hadirkan di Play Store? Kami siap membantu memetakan spesifikasi teknis dan merancang pengalaman pengguna yang tidak hanya fungsional, tetapi juga membangun loyalitas jangka panjang."
        />
    );
}
