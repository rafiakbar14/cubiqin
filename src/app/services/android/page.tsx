import React from 'react';
import ServicePage from '@/components/ServicePage';

export default function AndroidService() {
    return (
        <ServicePage
            title="Mobile Solutions"
            subtitle="Membawa Bisnis Anda ke Dalam Genggaman Pelanggan."
            accentColor="teal-500"
            imagePath="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2000"
            philosophy={`"Di era sekarang, smartphone adalah benda pertama yang kita sentuh saat bangun tidur. Memiliki aplikasi Android bagi bisnis Anda berarti Anda memiliki 'kursi' khusus di kehidupan sehari-hari pelanggan Anda. Sesuai filosofi **'Aku Bikinkan'**, kami ingin membantu Anda membangun jembatan yang paling intim antara brand Anda dengan mereka."`}
            painPoint="Masalah terbesar bisnis saat ini adalah retensi. Pelanggan mungkin pernah membeli produk Anda sekali, tapi bagaimana cara memastikan mereka ingat kembali? Tanpa aplikasi, Anda kehilangan kesempatan untuk 'menyapa' mereka lewat notifikasi yang personal."
            solution="Kami menciptakan aplikasi Android yang fokus pada User Journey. Artinya, kami memetakan setiap langkah pelanggan Anda agar mereka bisa bertransaksi atau mendapatkan info hanya dalam hitungan detik. Kami menghindari UI yang berbelit-belit."
            processSteps={['Riset User Journey', 'Desain UI/UX Sat-set', 'Development & Play Store Launch']}
            faqs={[
                {
                    question: "Aplikasi Android itu bukannya mahal ya?",
                    answer: "Investasi aplikasi adalah tentang memangkas biaya marketing jangka panjang karena Anda membangun loyalitas langsung. Kami punya solusi yang fleksibel."
                },
                {
                    question: "Ukurannya bakal gede gak?",
                    answer: "Kami melakukan optimasi berat agar aplikasi tetap ringan namun tetap kaya akan fitur. Kami sangat peduli pada kenyamanan pengguna akhir."
                }
            ]}
            testimonial={{
                quote: "Setelah punya aplikasi dari Cubiqin, jumlah orderan repeat pelanggan saya naik drastis. Notifikasi promonya beneran ngebantu!",
                author: "Andi, Owner Kedai Kopi Nusantara"
            }}
            ctaText="Anda punya ide fitur unik yang ingin ada di Play Store? Mari kita diskusikan. Kami akan bantu memetakan teknisnya agar ide liar Anda bisa jadi solusi nyata."
        />
    );
}
