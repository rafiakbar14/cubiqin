import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cubiqin - Jasa Pembuatan Website Architecture',
};

export default function WebsiteService() {
    return (
        <ServicePage
            title="Website Architecture"
            subtitle="Bukan Cuma Kode, Tapi Wajah Digital Anda yang Bekerja 24/7."
            accentColor="blue-600"
            imagePath="/assets/imagery/website-hero.png"
            painPointImage="/assets/imagery/website-pain.png"
            philosophy={`Bayangkan Anda melintasi sebuah kawasan bisnis yang sibuk, lalu menemukan sebuah toko dengan etalase yang terawat, pencahayaan yang tepat, dan papan nama yang bersih. Anda pasti akan lebih terdorong untuk masuk. Website adalah etalase digital Anda—dan kesan pertama terbentuk dalam hitungan detik.\n\nDi Cubiqin, kami percaya bahwa membangun website adalah membangun kepercayaan. Sesuai filosofi 'Aku Bikinkan', setiap baris kode dan setiap keputusan desain kami buat dengan mempertimbangkan pengunjung Anda sebagai prioritas utama.`}
            painPoint="Banyak bisnis kehilangan potensi pelanggan bukan karena produk yang buruk, melainkan karena website yang lambat, navigasi yang membingungkan, atau tampilan yang tidak responsif di perangkat mobile. Setiap detik keterlambatan muat halaman berdampak langsung pada tingkat kepercayaan dan konversi pengunjung."
            solution="Cubiqin merancang Website Architecture yang berpusat pada tiga pilar: Performa, Estetika, dan Pengalaman Pengguna. Kami membangun struktur yang cepat dan ringan, memilih palet warna yang harmonis, serta menyusun alur navigasi yang intuitif—sehingga pengunjung Anda bisa menemukan apa yang mereka cari tanpa hambatan."
            processSteps={['Konsultasi & Storytelling', 'Desain Arsitektur Estetik', 'Development & Launch']}
            faqs={[
                {
                    question: "Berapa lama proses pengerjaannya?",
                    answer: "Rata-rata, kami membutuhkan 2–4 minggu tergantung pada kompleksitas proyek. Kami mengedepankan kualitas di setiap tahap dan akan selalu memberikan update progres secara berkala kepada Anda."
                },
                {
                    question: "Apakah saya bisa mengelola konten website sendiri setelahnya?",
                    answer: "Tentu. Kami mengintegrasikan Content Management System (CMS) yang intuitif sehingga Anda dapat memperbarui konten, gambar, atau artikel tanpa memerlukan keahlian teknis khusus."
                }
            ]}
            testimonial={{
                quote: "Awalnya saya takut website saya bakal kerasa robot banget. Tapi tim Cubiqin beneran dengerin cerita bisnis saya. Hasilnya? Website yang beneran ada jiwanya!",
                author: "Rina, Founder Arka Design"
            }}
            ctaText="Website bukan pengeluaran, melainkan investasi jangka panjang yang bekerja untuk bisnis Anda setiap saat. Mari duduk bersama—kami siap mendengarkan visi Anda dan mewujudkannya menjadi aset digital yang berdampak nyata."
        />
    );
}
