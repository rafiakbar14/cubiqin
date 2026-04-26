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
            subtitle="Transformasi Efisiensi Bisnis dengan Ekosistem Digital Terintegrasi."
            accentColor="blue-600"
            imagePath="/assets/imagery/projects/kazana.png"
            solutionTitle="Solusi yang kami sarankan"
            philosophy={`Kazana adalah ekosistem digital yang dirancang untuk menjawab kompleksitas operasional bisnis modern. Kami memahami bahwa setiap bisnis memiliki keunikan dan skala yang berbeda, itulah mengapa Kazana mengusung konsep modularitas.\n\nDalam ekosistem ini, Anda dapat mengontrol seluruh aliran bisnis—mulai dari manajemen stok hingga akuntansi—dalam satu platform yang terintegrasi. Kazana bukan sekadar perangkat lunak, melainkan fondasi digital yang memberikan efisiensi nyata dan data yang akurat untuk mendukung pengambilan keputusan strategis Anda.`}
            painPoint="Banyak pemilik bisnis menghadapi tantangan besar dalam menyinkronkan data antar divisi. Stok yang tidak akurat, laporan kasir yang berantakan, serta proses administrasi manual yang memakan waktu adalah kendala klasik yang menghambat skala bisnis. Kondisi ini seringkali menyebabkan hilangnya peluang dan keterlambatan dalam merespons dinamika pasar."
            solution="Sebagai solusi komprehensif, Kazana menawarkan fitur-fitur unggulan yang dapat disesuaikan dengan kebutuhan spesifik Anda. Inventory Management kami mendukung pengelolaan multisite dan gudang secara real-time, Sistem POS (Point of Sale) yang intuitif memudahkan setiap transaksi, hingga modul Auto-Accounting yang secara otomatis menyusun laporan keuangan sesuai standar. Kazana dirancang untuk versatilitas tinggi, mulai dari operasional Cafe & FnB, jaringan Retail, hingga sistem Warehouse logistik yang kompleks."
            processSteps={['Audit & Analisis Kebutuhan Sistem', 'Konfigurasi & Kustomisasi Modul', 'Implementasi & Migrasi Data', 'Go-Live & Pendampingan Teknis']}
            faqs={[
                {
                    question: "Apakah sistem ini dapat dikembangkan sesuai pertumbuhan bisnis?",
                    answer: "Tentu. Berkat arsitektur modularnya, Anda dapat mulai dengan fitur yang paling mendasar dan menambahkan modul baru seiring dengan berkembangnya skala bisnis Anda."
                },
                {
                    question: "Bagaimana dengan keamanan data?",
                    answer: "Keamanan data adalah prioritas utama. Kazana menggunakan enkripsi tingkat lanjut dan infrastruktur cloud yang andal dengan sistem backup rutin untuk memastikan data Anda selalu aman dan tersedia."
                }
            ]}
            testimonial={{
                quote: "Implementasi Kazana memberikan visibilitas penuh atas stok di seluruh cabang kami secara real-time. Proses administrasi yang sebelumnya memakan waktu berhari-hari kini dapat diselesaikan secara instan.",
                author: "Sari Madu, Super Admin Operational"
            }}
            ctaText="Tertarik untuk mengimplementasikan sistem serupa yang disesuaikan dengan kebutuhan bisnis Anda? Kami di Cubiqin siap membantu mewujudkan solusi digital yang andal dan terukur."
        />
    );
}
