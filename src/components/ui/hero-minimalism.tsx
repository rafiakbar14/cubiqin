"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const WA_NUMBER = "6283135183093";
const wa = (text: string) =>
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");

export default function MinimalHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    setSize();
    type P = { x: number; y: number; speed: number; opacity: number; fadeDelay: number; fadeStart: number; fadingOut: boolean; };
    let particles: P[] = [];
    let raf = 0;
    const count = () => Math.floor((canvas.width * canvas.height) / 9000);
    const make = (): P => { const fd = Math.random() * 600 + 100; return { x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: Math.random() / 5 + 0.05, opacity: 0.5, fadeDelay: fd, fadeStart: Date.now() + fd, fadingOut: false }; };
    const reset = (p: P) => { p.x = Math.random() * canvas.width; p.y = Math.random() * canvas.height; p.speed = Math.random() / 5 + 0.05; p.opacity = 0.5; p.fadeDelay = Math.random() * 600 + 100; p.fadeStart = Date.now() + p.fadeDelay; p.fadingOut = false; };
    const init = () => { particles = []; for (let i = 0; i < count(); i++) particles.push(make()); };
    const draw = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.y -= p.speed; if (p.y < 0) reset(p); if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true; if (p.fadingOut) { p.opacity -= 0.005; if (p.opacity <= 0) reset(p); } ctx.fillStyle = `rgba(250,250,250,${p.opacity})`; ctx.fillRect(p.x, p.y, 0.5, Math.random() * 1.5 + 0.5); }); raf = requestAnimationFrame(draw); };
    window.addEventListener("resize", () => { setSize(); init(); });
    init(); raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen z-0" />

      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32">
          <div className="max-w-7xl mx-auto w-full">

            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px bg-[#555]" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#555]">Cubiqin — Digital Agency</span>
            </div>

            <h1 className="font-black leading-none mb-0" style={{ fontSize: "clamp(52px, 11vw, 140px)", letterSpacing: "-0.03em" }}>
              <span className="block text-[#f0f0f0]">Bikin yang</span>
              <span className="block text-[#f0f0f0]">orang lain</span>
              <span className="block italic text-[#3b82f6]">kagumi.</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between mt-10 gap-8">
              <p className="text-[#555] text-base md:text-lg max-w-sm leading-relaxed">
                Website, aplikasi Android, dan logo — dibuat serius, bukan asal jadi.
              </p>
              <button
                onClick={() => wa("Halo Cubiqin! Saya mau diskusi proyek.")}
                className="self-start md:self-auto inline-flex items-center gap-3 px-7 py-4 bg-[#f0f0f0] text-[#080808] font-bold text-sm tracking-wider uppercase rounded-full hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
              >
                Mulai Proyek
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 mt-16">
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#333]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#444]">Scroll</span>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="border-y border-[#1a1a1a] py-4 overflow-hidden">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap" style={{ width: "max-content" }}>
            {[...Array(3)].map((_, rep) => (
              <React.Fragment key={rep}>
                {["Website", "Aplikasi Android", "Logo & Branding", "UI/UX Design", "Landing Page", "Brand Identity"].map((item, i) => (
                  <span key={i} className="flex items-center gap-12 text-[#333] text-sm font-medium tracking-widest uppercase">
                    {item}
                    <span className="text-[#2a2a2a] text-lg">✦</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-6 h-px bg-[#333]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#555]">Layanan</span>
          </div>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Jasa Pembuatan Website",
                sub: "Web Development",
                desc: "Bukan template, bukan drag-and-drop. Kode bersih, performa tinggi, dan tampilan yang bikin pengunjung tidak langsung pergi.",
                tags: ["Next.js", "React", "Tailwind", "CMS"],
              },
              {
                num: "02",
                title: "Jasa Pembuatan Aplikasi Android",
                sub: "Mobile Development",
                desc: "Dari ide di kepala ke Play Store — dengan arsitektur yang tidak akan jadi bencana 6 bulan kemudian.",
                tags: ["Kotlin", "Jetpack Compose", "REST API", "Firebase"],
              },
              {
                num: "03",
                title: "Jasa Pembuatan Logo & Branding",
                sub: "Visual Identity",
                desc: "Logo yang masih relevan 10 tahun ke depan. Bukan tren, tapi karakter — karena brand yang kuat diingat, bukan cuma dilihat.",
                tags: ["Logo Design", "Brand Guidelines", "Tipografi", "Color System"],
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="group border-t border-[#1a1a1a] py-10 cursor-pointer"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => wa(`Halo Cubiqin! Saya tertarik dengan ${svc.title}.`)}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  <span className="text-[11px] text-[#333] tracking-widest shrink-0 mt-1">{svc.num}</span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                      <h3
                        className="font-extrabold leading-none transition-colors duration-300"
                        style={{
                          fontSize: "clamp(28px, 4vw, 52px)",
                          letterSpacing: "-0.02em",
                          color: hoveredService === i ? "#3b82f6" : "#f0f0f0",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <span className="text-[11px] text-[#444] tracking-widest uppercase shrink-0">{svc.sub}</span>
                    </div>

                    <p className="text-[#555] text-sm leading-relaxed max-w-xl mb-6">{svc.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag, ti) => (
                        <span key={ti} className="px-3 py-1 text-[10px] tracking-widest uppercase text-[#444] border border-[#1e1e1e] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 mt-2 ${hoveredService === i ? "border-[#3b82f6] bg-[#3b82f6] text-white" : "border-[#222] text-[#333]"}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#1a1a1a]" />
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 md:px-12 py-24 border-t border-[#111]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-6 h-px bg-[#333]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#555]">Tentang</span>
              </div>
              <h2 className="font-extrabold leading-tight mb-0" style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.025em" }}>
                Kami tidak<br />
                <span className="italic text-[#3b82f6]">kerja asal</span><br />
                kirim.
              </h2>
            </div>

            <div className="md:pt-24 space-y-8">
              <p className="text-[#888] text-base leading-loose">
                Cubiqin berdiri di Samarinda dengan satu keyakinan: produk digital yang bagus itu bukan keberuntungan. Butuh proses yang jelas, komunikasi yang jujur, dan orang yang benar-benar peduli dengan hasilnya.
              </p>
              <p className="text-[#555] text-sm leading-loose">
                Kami mengerjakan website, aplikasi Android, dan desain logo untuk bisnis yang ingin tampil serius — bukan yang ingin jadi yang paling murah.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4">
                {[["50+", "Proyek"], ["3 Thn", "Pengalaman"], ["98%", "Klien Puas"]].map(([val, label], i) => (
                  <div key={i}>
                    <div className="text-2xl font-extrabold text-[#f0f0f0] tracking-tight">{val}</div>
                    <div className="text-[10px] text-[#444] uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => wa("Halo Cubiqin! Saya ingin tahu lebih lanjut soal layanan kalian.")}
                className="inline-flex items-center gap-2 text-sm text-[#3b82f6] hover:gap-4 transition-all duration-300"
              >
                Ngobrol langsung
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 md:px-12 py-24 border-t border-[#111]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-6 h-px bg-[#333]" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#555]">Cara Kerja</span>
            </div>

            <div className="grid md:grid-cols-2 gap-x-24 gap-y-0">
              <h2 className="font-extrabold leading-tight self-start" style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em" }}>
                Dari obrolan<br />
                pertama sampai<br />
                <span className="italic text-[#3b82f6]">produk live.</span>
              </h2>

              <div className="space-y-0">
                {[
                  ["Kita ngobrol", "Cerita kebutuhan, budget, dan timeline. Tidak ada form panjang, tidak ada sales pitch."],
                  ["Kita buat proposal", "Estimasi harga dan waktu yang jelas. Tidak ada biaya surpris di tengah jalan."],
                  ["Kita kerjakan", "Update progress berkala. Bisa revisi di setiap tahap."],
                  ["Kita serahkan", "Semua file, akses, dan dokumentasi. Produk Anda, sepenuhnya."],
                ].map(([title, desc], i) => (
                  <div key={i} className="border-t border-[#1a1a1a] py-7 flex gap-8">
                    <span className="text-[10px] text-[#333] tracking-widest shrink-0 mt-0.5 w-5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="text-sm font-bold text-[#f0f0f0] mb-1">{title}</div>
                      <div className="text-xs text-[#555] leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-[#1a1a1a]" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-[#111]">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#444] mb-8">Siap mulai?</p>
            <h2
              className="font-extrabold leading-none mb-12"
              style={{ fontSize: "clamp(48px, 10vw, 120px)", letterSpacing: "-0.03em" }}
            >
              <span className="text-[#f0f0f0]">Hubungi</span><br />
              <span className="italic text-[#3b82f6]">sekarang.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => wa("Halo Cubiqin! Saya mau diskusi proyek bersama kalian.")}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Kami
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-[#222] text-[#555] font-bold text-sm tracking-wider uppercase rounded-full hover:border-[#444] hover:text-[#f0f0f0] transition-all"
              >
                hello@cubiqin.com
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
