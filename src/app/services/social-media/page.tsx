import React from 'react';
import ServicePage from '@/components/ServicePage';

export default function SocialMediaService() {
    return (
        <ServicePage
            title="Social Media Engine"
            subtitle="Membangun Cerita dan Kepercayaan Lewat Kehadiran Digital."
            accentColor="pink-500"
            imagePath="/C:/Users/ASUS/.gemini/antigravity/brain/3f110339-f694-405b-8f1f-5b7fcab8a4b2/social_media_3d_hero_bg_1777087136624.png"
            philosophy={`"Zaman sekarang, sebelum orang membeli, mereka hampir selalu mengecek Instagram atau TikTok Anda dulu. Jika feed Anda berantakan atau tidak aktif, mereka akan sangsi. Sosial media adalah bukti bahwa bisnis Anda 'hidup' dan berkembang."`}
            painPoint="Masalahnya biasanya terletak pada konsistensi. Pemilik bisnis terlalu sibuk untuk memikirkan caption atau desain setiap hari. Postingan jadi asal-asalan, gambarnya pecah, atau informasinya basi."
            solution="Tim kreatif kami akan menjadi perpanjangan tangan visual bisnis Anda. Kami merancang feed yang memiliki 'vibes' konsisten dan estetik sesuai identitas brand Anda. Kami membangun komunitas, bukan sekadar pengikut."
            processSteps={['Moodboard Creation', 'Content Production', 'Community Engagement']}
            faqs={[
                {
                    question: "Apa saya dapat semua file desainnya?",
                    answer: "Tentu, kami sangat transparan. Semua aset visual yang kami buat adalah milik Anda sepenuhnya."
                },
                {
                    question: "Bisa gak kalau tema desainnya custom?",
                    answer: "Sangat bisa! Kita akan mulai dengan sesi 'Moodboard' untuk memastikan selera visual kita selaras sebelum pengerjaan dimulai."
                }
            ]}
            testimonial={{
                quote: "Feed Instagram toko saya jadi jauh lebih rapi dan banyak yang tanya-tanya lewat DM sekarang. Cubiqin beneran paham cara bikin brand kelihatan mahal!",
                author: "Santi, Boutique Owner"
            }}
            ctaText="Ingin punya kehadiran media sosial yang bikin kompetitor melirik? Yuk, share referensi konten yang Anda suka. Kita buat strategi konten yang beneran mencerminkan kehebatan bisnis Anda."
        />
    );
}
