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
            philosophy={`'Di dunia bisnis yang bergerak cepat, sistem yang kaku adalah penghambat pertumbuhan. Kazana lahir dari ide untuk memberikan kebebasan bagi pemilik bisnis dalam mengelola operasional mereka secara modular. Sesuai visi Cubiqin untuk menghadirkan solusi yang bukan cuma canggih tapi juga manusiawi, Kazana dirancang agar setiap modulnya—mulai dari Stok hingga Akuntansi—terasa seperti asisten pribadi yang cerdas.'`}
            painPoint="Banyak bisnis terjebak dengan aplikasi kasir atau stok yang terpisah-pisah. Data di gudang beda dengan data di kasir, dan laporan keuangan harus dibuat manual. Ini melelahkan dan rentan kesalahan (human error)."
            solution="Kazana menyatukan semuanya. Dengan arsitektur cloud-native yang modular, Anda bisa mulai dari modul yang paling dibutuhkan dan menambahkannya seiring pertumbuhan bisnis. Semua data tersinkronisasi secara real-time, memberikan Anda kontrol penuh dalam satu dashboard inteligen."
            processSteps={['Analisis Kebutuhan Modul', 'Konfigurasi Ekosistem Kazana', 'Migrasi Data & Onboarding', 'Go-Live & Dukungan Berkala']}
            faqs={[
                {
                    question: "Apakah saya harus berlangganan semua modul?",
                    answer: "Tidak. Kazana bersifat modular, Anda hanya membayar untuk modul yang Anda gunakan. Sangat fleksibel untuk bisnis yang sedang berkembang."
                },
                {
                    question: "Data saya aman di cloud?",
                    answer: "Keamanan adalah prioritas kami. Kazana menggunakan enkripsi tingkat tinggi dan backup berkala untuk memastikan data bisnis Anda selalu aman dan tersedia."
                }
            ]}
            testimonial={{
                quote: "Sistem modular Kazana beneran ngerubah cara kami ngelola stok di banyak cabang. Sekarang semuanya terpantau jelas dari satu layar saja.",
                author: "Sari Madu, Super Admin"
            }}
            ctaText="Ingin melihat bagaimana Kazana bisa mentransformasi operasional bisnis Anda? Mari kita jadwalkan demo eksklusif atau konsultasi gratis."
        />
    );
}
