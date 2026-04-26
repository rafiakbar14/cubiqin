import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cubiqin - Detail Proyek Kazana ERP',
};

export default function KazanaProject() {
    return (
        <ServicePage
            title="Kazana Modular ERP"
            subtitle="Ekosistem Bisnis Modern untuk Efisiensi Tanpa Batas."
            accentColor="blue-600"
            imagePath="/assets/imagery/projects/kazana.png"
            philosophy={`"Jujurly, Kazana itu jawaban buat bisnis yang mau grow tanpa ribet. Kita build ekosistem modular yang smart banget, di mana 'What is Kazana' sebenernya adalah tentang kebebasan kamu buat ngatur bisnis sesuka hati. Gak ada lagi ceritanya sistem yang kaku, karena Kazana itu 'Liquid'—ngikutin kebutuhan kamu, bukan sebaliknya. Tetep profesional tapi vibes-nya tetep chill."`}
            painPoint="Ngerasa burnout gara-gara data stok yang 'ghosting' alias gak sinkron sama kasir? Atau pusing liat laporan yang zonk dan harus input manual satu-satu? Masalah operasional kayak gini tuh beneran red flag buat kemajuan bisnis kamu di masa depan."
            solution="Kazana hadir dengan fitur-fitur sat-set: Inventory Pro buat manajemen stok lintas gudang, POS yang intuitif buat sales, sampe Auto-Accounting yang bikin laporan keuangan kamu auto-ready. Bisa dibuat untuk apa aja? Mulai dari Cafe hopping yang lagi viral, Retail store yang estetik, sampai Warehouse logistik yang kompleks. Semua terintegrasi dan bisa dipantau real-time dari device kamu."
            processSteps={['Fase 1: Deep Talk Analisis Kebutuhan', 'Fase 2: Setup Ekosistem Modular', 'Fase 3: Migrasi Data & Onboarding', 'Fase 4: Go-Live & Support Sat-Set']}
            faqs={[
                {
                    question: "Apakah saya harus berlangganan semua modul?",
                    answer: "Gak perlu dong! Kazana itu flexible banget. Kamu cuma bayar modul yang emang dibutuhin bisnis kamu sekarang. Hemat dan efisien, kan?"
                },
                {
                    question: "Data saya aman di cloud?",
                    answer: "Safety first! Kita pake enkripsi tingkat tinggi dan backup rutin. Jadi data bisnis kamu tetep aman dan bisa diakses kapanpun kamu butuh."
                }
            ]}
            testimonial={{
                quote: "Sistem modular Kazana beneran ngerubah cara kami ngelola stok di banyak cabang. Sekarang semuanya terpantau jelas dari satu layar saja, vibes-nya jadi lebih tenang.",
                author: "Sari Madu, Super Admin"
            }}
            ctaText="Punya visi buat bikin sistem yang sama gaharnya atau bahkan lebih oke lagi buat bisnis kamu? Yuk, kita obrolin di Cubiqin. Kita siap build solusi digital yang gak cuma fungsional, tapi juga punya 'character' yang kuat."
        />
    );
}
