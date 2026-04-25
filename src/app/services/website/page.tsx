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
            imagePath="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000"
            painPointImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000"
            philosophy={`"Bayangkan Anda sedang berjalan di trotoar yang ramai, dan Anda melihat sebuah toko dengan etalase yang kusam, pintu yang sulit dibuka, dan papan nama yang hampir jatuh. Apakah Anda akan masuk? Mungkin tidak. Nah, website adalah etalase bisnis Anda di dunia digital. 

Bagi banyak orang, membuat website terasa seperti urusan teknis yang sangat dingin—hanya soal hosting dan domain. Tapi di Cubiqin, kami melihatnya secara berbeda. Kami kembali ke akar nama kami: **'Aku Bikinkan'**. Kami ingin mempersonalisasi setiap baris kode agar website Anda terasa seperti perpanjangan tangan dari dedikasi Anda sendiri. Kami ingin 'membikinkan' Anda sebuah ruang yang hangat, di mana pengunjung merasa aman dan disambut."`}
            painPoint="Kebanyakan bisnis terjebak dengan website yang 'lelah'. Website yang lambat saat dibuka di HP, navigasi yang berputar-putar, hingga desain yang terasa ketinggalan zaman. Ini bukan sekadar masalah estetika; ini adalah masalah kepercayaan."
            solution="Kami merancang Website Architecture yang berfokus pada Performance, Aesthetics, & Soul. Kami memadukan harmoni warna yang profesional dengan tata letak yang bersih. Kami ingin pengunjung Anda berkata: 'Wah, ini bisnis yang beneran niat!'"
            processSteps={['Konsultasi & Storytelling', 'Desain Arsitektur Estetik', 'Development & Launch']}
            faqs={[
                {
                    question: "Berapa lama sih pembuatannya?",
                    answer: "Kami biasanya butuh waktu 2-4 minggu. Kami tidak ingin buru-buru karena kami ingin setiap pikselnya sempurna. Kami 'bikinkan' dengan hati, bukan asal jadi."
                },
                {
                    question: "Apa saya bisa ganti isinya sendiri nanti?",
                    answer: "Tentu! Kami akan bekali Anda dengan sistem yang sangat mudah (No-Code friendly). Anda tidak perlu jadi ahli IT untuk sekadar ganti foto atau update berita."
                }
            ]}
            testimonial={{
                quote: "Awalnya saya takut website saya bakal kerasa robot banget. Tapi tim Cubiqin beneran dengerin cerita bisnis saya. Hasilnya? Website yang beneran ada jiwanya!",
                author: "Rina, Founder Arka Design"
            }}
            ctaText="Website Anda adalah aset masa depan. Jangan biarkan ia terbengkalai. Yuk, kita duduk bareng—kita bedah apa visi Anda dan bagaimana kami bisa mewujudkannya dengan cara yang paling estetik."
        />
    );
}
