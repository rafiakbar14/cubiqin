"use client";

import React, { useEffect, useRef } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const services = [
  {
    id: "website",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400",
    badge: "Website",
    title: "Jasa Pembuatan Website",
    desc: "Website profesional yang estetik, cepat, dan dioptimalkan untuk konversi. Dari landing page hingga platform e-commerce skala enterprise.",
    features: ["Desain Modern & Responsif", "SEO-Optimized", "Loading Super Cepat", "CMS yang Mudah Dikelola"],
    href: "/services/website",
    cta: "Konsultasi Website",
  },
  {
    id: "android",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "teal",
    gradient: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/30",
    iconBg: "bg-teal-500/10 text-teal-400",
    badge: "Android",
    title: "Jasa Pembuatan Aplikasi Android",
    desc: "Aplikasi Android native yang powerful, intuitif, dan siap bersaing di Google Play Store. Dari MVP hingga aplikasi skala penuh.",
    features: ["UI/UX Intuitif", "Performa Native", "Integrasi API & Backend", "Support Pasca-Launch"],
    href: "/services/android",
    cta: "Konsultasi Android",
  },
  {
    id: "logo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400",
    badge: "Branding",
    title: "Jasa Pembuatan Logo & Branding",
    desc: "Identitas visual brand yang kuat, memorable, dan profesional. Logo yang berbicara tentang nilai bisnis Anda tanpa satu kata pun.",
    features: ["Konsep Unik & Original", "File Vektor (SVG/AI/PDF)", "Panduan Brand Identity", "Revisi Hingga Puas"],
    href: "/services/logo",
    cta: "Konsultasi Logo",
  },
];

const whyUs = [
  { icon: "⚡", title: "Cepat & Tepat Waktu", desc: "Kami berkomitmen pada deadline. Proyek selesai sesuai jadwal tanpa mengorbankan kualitas." },
  { icon: "💎", title: "Kualitas Premium", desc: "Setiap piksel dirancang dengan cermat. Standar kualitas kami setara studio internasional." },
  { icon: "🔒", title: "Transparan & Terpercaya", desc: "Progress proyek bisa dipantau langsung. Tidak ada biaya tersembunyi atau kejutan di akhir." },
  { icon: "🛠️", title: "Support Jangka Panjang", desc: "Hubungan kami tidak berakhir saat proyek selesai. Tim kami siap membantu kapan pun Anda butuh." },
  { icon: "🎯", title: "Berbasis Data & Strategi", desc: "Setiap keputusan desain dan teknologi dibuat berdasarkan riset dan data bisnis Anda." },
  { icon: "🚀", title: "Teknologi Terkini", desc: "Stack teknologi terdepan memastikan produk Anda siap untuk masa depan." },
];

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "98%", label: "Klien Puas" },
  { value: "3 Tahun", label: "Pengalaman" },
  { value: "24/7", label: "Support Aktif" },
];

const process = [
  { step: "01", title: "Konsultasi Gratis", desc: "Ceritakan visi dan kebutuhan bisnis Anda. Kami akan memberikan rekomendasi solusi terbaik — tanpa biaya.", color: "text-blue-400" },
  { step: "02", title: "Proposal & Estimasi", desc: "Kami menyiapkan proposal detail lengkap dengan timeline, estimasi biaya, dan tahapan pengerjaan yang jelas.", color: "text-teal-400" },
  { step: "03", title: "Desain & Development", desc: "Tim kami mulai bekerja. Anda mendapat update berkala dan bisa memberikan masukan di setiap tahapan.", color: "text-purple-400" },
  { step: "04", title: "Revisi & Finalisasi", desc: "Kami menyempurnakan detail berdasarkan feedback Anda hingga hasilnya benar-benar memuaskan.", color: "text-pink-400" },
  { step: "05", title: "Launch & Serah Terima", desc: "Produk diluncurkan, semua file dan akses diserahkan. Anda siap memenangkan pasar.", color: "text-orange-400" },
  { step: "06", title: "Support Pasca-Launch", desc: "Tim kami tetap standby untuk membantu maintenance, update, dan pengembangan lebih lanjut.", color: "text-green-400" },
];

const testimonials = [
  {
    name: "Andi Kurniawan",
    role: "CEO, TechStartup ID",
    avatar: "AK",
    avatarBg: "bg-blue-500",
    text: "Cubiqin benar-benar memahami apa yang kami butuhkan. Website kami sekarang tampil profesional dan konversinya naik 3x lipat dalam 2 bulan!",
    service: "Website",
  },
  {
    name: "Sari Dewi",
    role: "Founder, BeautyApp",
    avatar: "SD",
    avatarBg: "bg-purple-500",
    text: "Aplikasi Android yang mereka buat luar biasa. UI-nya intuitif, performanya cepat, dan tim supportnya sangat responsif.",
    service: "Android",
  },
  {
    name: "Budi Santoso",
    role: "Owner, KulinerNusantara",
    avatar: "BS",
    avatarBg: "bg-teal-500",
    text: "Logo yang dibuat Cubiqin sempurna banget! Langsung merepresentasikan brand kami. Proses revisinya juga mudah dan timnya sabar.",
    service: "Logo",
  },
];

const WaIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MinimalHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    type Particle = {
      x: number; y: number; speed: number;
      opacity: number; fadeDelay: number;
      fadeStart: number; fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.floor((canvas.width * canvas.height) / 7000);

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        ctx.fillStyle = `rgba(250, 250, 250, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { setSize(); init(); };
    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const openWhatsApp = (text: string) => {
    window.open(`https://wa.me/6283135183093?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen overflow-x-hidden font-sans">
      {/* Particle background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27272a] bg-white/5 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-[#a1a1aa] mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Digital Agency — Website · Android · Logo
            </div>

            <h1
              className="font-extrabold leading-[0.9] mb-6"
              style={{ fontSize: "clamp(40px, 9vw, 96px)" }}
            >
              Wujudkan Impian{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400">
                Digital
              </span>{" "}
              Bisnis Anda
            </h1>

            <p className="text-[#a1a1aa] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Cubiqin adalah agency digital terpercaya spesialis pembuatan{" "}
              <strong className="text-white">Website</strong>,{" "}
              <strong className="text-white">Aplikasi Android</strong>, dan{" "}
              <strong className="text-white">Logo &amp; Branding</strong> yang mengubah visi bisnis menjadi aset digital yang memukau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => openWhatsApp("Halo Cubiqin! Saya ingin konsultasi layanan digital.")}
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] rounded-2xl text-white font-bold tracking-wider uppercase text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#25D366]/20"
              >
                <WaIcon />
                Konsultasi Gratis
              </button>
              <a
                href="/portfolio"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-[#27272a] text-[#a1a1aa] font-bold tracking-wider uppercase text-sm hover:border-white hover:text-white transition-all"
              >
                Lihat Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl border border-[#27272a] bg-white/[0.02] backdrop-blur-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-[11px] text-[#a1a1aa] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="layanan" className="px-6 py-24 border-t border-[#27272a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#a1a1aa] mb-3">Layanan Kami</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Solusi Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Lengkap</span>
              </h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto">
                Satu agency untuk semua kebutuhan digital bisnis Anda — dari identitas visual hingga platform digital berperforma tinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className={`group relative p-8 rounded-3xl border bg-gradient-to-br ${svc.gradient} ${svc.border} hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col`}
                  onClick={() => openWhatsApp(`Halo Cubiqin! Saya ingin konsultasi ${svc.title}.`)}
                >
                  <div className={`w-14 h-14 rounded-2xl ${svc.iconBg} flex items-center justify-center mb-6`}>
                    {svc.icon}
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#a1a1aa] mb-2">{svc.badge}</div>
                  <h3 className="text-xl font-extrabold mb-3">{svc.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {svc.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-[#d4d4d8]">
                        <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold tracking-wider uppercase hover:bg-white/10 transition-all group-hover:border-white/20">
                    {svc.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="px-6 py-24 border-t border-[#27272a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#a1a1aa] mb-3">Keunggulan Kami</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Mengapa Memilih{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Cubiqin?</span>
              </h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto">
                Kami bukan sekadar vendor. Kami adalah mitra pertumbuhan digital jangka panjang untuk bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-[#27272a] bg-white/[0.02] hover:border-[#3f3f46] hover:bg-white/[0.04] transition-all"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-extrabold text-base mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 py-24 border-t border-[#27272a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#a1a1aa] mb-3">Cara Kerja Kami</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Proses yang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transparan</span>
              </h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto">
                Dari konsultasi pertama hingga produk live — setiap langkah dikerjakan dengan terstruktur dan penuh komunikasi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {process.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#27272a] bg-white/[0.02] hover:border-[#3f3f46] transition-all">
                  <div className={`text-5xl font-black ${item.color} mb-4 opacity-40`}>{item.step}</div>
                  <h3 className="font-extrabold text-base mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-6 py-24 border-t border-[#27272a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#a1a1aa] mb-3">Kata Klien Kami</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Mereka Sudah{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Merasakannya</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#27272a] bg-white/[0.02] flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#d4d4d8] text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-extrabold shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-[10px] text-[#a1a1aa] uppercase tracking-wider">{t.role}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-[#27272a] text-[9px] text-[#a1a1aa] uppercase tracking-wider">
                        {t.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 py-24 border-t border-[#27272a]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-10 md:p-16 rounded-3xl border border-[#27272a] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-teal-500/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-6">🚀</div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Siap Memulai Proyek Anda?
                </h2>
                <p className="text-[#a1a1aa] mb-8 leading-relaxed">
                  Konsultasi pertama gratis, tanpa komitmen. Tim kami siap mendengarkan dan memberikan solusi terbaik untuk bisnis Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => openWhatsApp("Halo Cubiqin! Saya ingin konsultasi gratis untuk proyek digital saya.")}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] rounded-2xl text-white font-bold tracking-wider uppercase text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#25D366]/20"
                  >
                    <WaIcon />
                    Chat WhatsApp Sekarang
                  </button>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[#27272a] text-[#a1a1aa] font-bold tracking-wider uppercase text-sm hover:border-white hover:text-white transition-all"
                  >
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
