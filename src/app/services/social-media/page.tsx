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
            imagePath="/assets/imagery/social-hero.png"
            painPointImage="/assets/imagery/social-pain.png"
            philosophy={`Platform media sosial, khususnya Instagram, bukan sekadar galeri foto digital. Ia adalah ruang di mana brand Anda bernapas, berinteraksi, dan membangun hubungan yang tulus dengan audiens dari waktu ke waktu.\n\nDi Cubiqin, kami menggabungkan keahlian desain visual berkualitas tinggi dengan pemahaman mendalam tentang perilaku audiens digital, untuk memastikan setiap konten yang kami hadirkan memiliki tujuan yang jelas dan dampak yang terukur.`}
            painPoint="Tantangan nyata bagi pemilik bisnis bukan pada kekurangan ide konten, melainkan pada konsistensi eksekusinya. Riset tren yang terus berubah, produksi desain yang memakan waktu, manajemen jadwal posting, dan analisis performa konten—semuanya membutuhkan dedikasi penuh yang sulit dijalankan bersamaan dengan operasional bisnis sehari-hari."
            solution="Tim kami mengambil alih seluruh beban kreatif dan manajerial konten Anda. Mulai dari perumusan strategi konten yang relevan dengan tren dan behavior audiens, produksi desain visual yang estetis dan konsisten, penjadwalan posting yang optimal, hingga evaluasi strategi bulanan berdasarkan data performa yang aktual."
            solutionTitle="Solusi yang kami sarankan"
            processSteps={[
                'Research & Ideasi Konten Kreatif',
                'Produksi Desain Visual & Copywriting',
                'Scheduling (Penjadwalan Posting)',
                'Evaluasi & Strategic Monthly Review'
            ]}
            faqs={[
                {
                    question: "Apakah tim Cubiqin juga menangani respons komentar dan pesan?",
                    answer: "Fokus layanan kami adalah pada Manajemen Konten Strategis—mulai dari ideasi, desain, hingga penjadwalan. Untuk respons pelanggan (CS/Sales), kami rekomendasikan ditangani oleh tim internal Anda agar informasi produk tetap akurat. Namun kami selalu siap memberikan panduan strategi komunikasinya."
                },
                {
                    question: "Berapa jumlah konten yang akan diproduksi setiap bulan?",
                    answer: "Kami menyusun kalender konten yang seimbang antara konten edukasi, promosi, dan engagement. Frekuensi dan formatnya akan disesuaikan dengan target audiens, platform yang digunakan, dan anggaran yang dialokasikan."
                }
            ]}
            testimonial={{
                quote: "Sejak feed dikelola Cubiqin, brand awareness kami naik drastis. Desainnya benar-benar beda dan terasa sangat personal buat customer kami.",
                author: "Santi, Fashion Boutique Owner"
            }}
            ctaText="Bangun identitas visual yang kuat dan konsisten untuk brand Anda di media sosial. Hubungi kami untuk mulai merancang strategi konten yang membedakan brand Anda secara signifikan di antara para kompetitor."
        />
    );
}
