"use client";

import React, { useEffect, useRef } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
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

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="minimal-root">
      <style>{`
.minimal-root, .minimal-root * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.minimal-root {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  --bg: #0a0a0a;
  --fg: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;
  --accent: #e5e7eb;

  background: var(--bg);
  color: var(--fg);
}

.background-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* header */
.header {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  z-index: 10;
}
.brand {
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
}
.cta {
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  background: #111;
  color: var(--fg);
  border: 1px solid var(--border);
  font-size: 13px;
  line-height: 36px;
  cursor: pointer;
}
.cta:hover { background: #0d0d0d; }

/* hero center */
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  z-index: 5;
  padding: 100px 24px;
}
.kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}
.title {
  font-weight: 600;
  font-size: clamp(32px, 8vw, 88px);
  line-height: 0.95;
  margin: 0;
  color: var(--fg);
  text-shadow: none;
}
.subtitle {
  margin-top: 18px;
  font-size: clamp(14px, 2.2vw, 18px);
  color: var(--muted);
}

/* accent lines container */
.accent-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* base line visuals */
.hline, .vline {
  position: absolute;
  background: var(--border);
  opacity: .75;
  will-change: transform, opacity;
}

/* horizontal lines */
.hline {
  height: 1px; left: 0; right: 0;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  animation: drawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
}
.hline:nth-child(1){ top: 20%; animation-delay: 150ms; }
.hline:nth-child(2){ top: 50%; animation-delay: 280ms; }
.hline:nth-child(3){ top: 80%; animation-delay: 410ms; }

/* vertical lines */
.vline {
  width: 1px; top: 0; bottom: 0;
  transform: scaleY(0);
  transform-origin: 50% 0%;
  animation: drawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
}
.vline:nth-child(4){ left: 20%; animation-delay: 520ms; }
.vline:nth-child(5){ left: 50%; animation-delay: 640ms; }
.vline:nth-child(6){ left: 80%; animation-delay: 760ms; }

/* subtle gradient shimmer while drawing */
.hline::after, .vline::after{
  content:"";
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, transparent, rgba(250,250,250,.25), transparent);
  opacity:0;
  animation: shimmer 900ms ease-out forwards;
}
.hline:nth-child(1)::after{ animation-delay: 150ms; }
.hline:nth-child(2)::after{ animation-delay: 280ms; }
.hline:nth-child(3)::after{ animation-delay: 410ms; }
.vline:nth-child(4)::after{ animation-delay: 520ms; }
.vline:nth-child(5)::after{ animation-delay: 640ms; }
.vline:nth-child(6)::after{ animation-delay: 760ms; }

/* keyframes */
@keyframes drawX {
  0% { transform: scaleX(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleX(1); opacity: .75; }
}
@keyframes drawY {
  0% { transform: scaleY(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleY(1); opacity: .75; }
}
@keyframes shimmer {
  0% { opacity: .0; }
  30% { opacity: .25; }
  100% { opacity: 0; }
}

/* canvas */
.particleCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: .6;
}

/* footer section (copy) */
.content {
  position: relative;
  padding: 80px 24px;
  border-top: 1px solid var(--border);
  display: grid;
  place-items: center;
  text-align: center;
  gap: 6px;
  z-index: 10;
}
.content .tag {
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.content .heading {
  font-size: 22px;
  font-weight: 600;
  color: var(--fg);
}
.content .desc {
  font-size: 14px;
  color: var(--muted);
  max-width: 680px;
}

/* New Sections Styling */
.section-container {
  position: relative;
  z-index: 10;
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.process-card {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.process-card:hover {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.05);
}

.process-number {
  font-size: 12px;
  color: #3b82f6;
  font-weight: 700;
  margin-bottom: 16px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.tech-badge {
  padding: 8px 16px;
  border-radius: 99px;
  border: 1px solid var(--border);
  font-size: 13px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
}
@media (max-width: 768px) {
  .header { padding: 16px 20px; }
  .hero { padding: 0 20px; }
  .title { font-size: clamp(32px, 10vw, 42px); line-height: 1.2; margin-bottom: 12px; }
  .subtitle { font-size: 14px; line-height: 1.5; padding: 0 10px; }
  .content { padding: 40px 20px; }
  .content .heading { font-size: 20px; }
}
      `}</style>

      {/* Fixed Background Layer */}
      <div className="background-layer">
        <canvas ref={canvasRef} className="particleCanvas" />
        <div className="accent-lines">
          <div className="hline" />
          <div className="hline" />
          <div className="hline" />
          <div className="vline" />
          <div className="vline" />
          <div className="vline" />
        </div>
      </div>

      <div className="relative z-10 font-sans selection:bg-blue-500/30">
        <Navbar />

        {/* Hero Section */}
        <main className="hero min-h-screen relative flex items-center justify-center p-6 bg-transparent">
          <div className="max-w-4xl text-center">
            <div className="kicker">Jasa Pembuatan Website Agency</div>
            <h1 className="title">Solusi Digital. <br className="hidden sm:block" />Elegan & Cepat.</h1>
            <p className="subtitle mb-12">Membangun pengalaman web yang luar biasa untuk bisnis Anda dengan estetika modern.</p>

            <div className="flex justify-center">
              <button
                onClick={() => window.open('https://wa.me/6283135183093?text=Halo%20Cubiqin!%20Saya%20ingin%20diskusi%20proyek%20website.', '_blank')}
                className="group relative flex items-center gap-4 px-8 py-4 bg-[#25D366] rounded-2xl text-white font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#25D366]/20"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#25D366] shadow-inner">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                Diskusi di WhatsApp
              </button>
            </div>
          </div>
        </main>

        {/* Working Process Section */}
        <section className="section-container">
          <div className="text-center mb-12">
            <div className="tag">Keunggulan Kami</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kami Bekerja</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">Kami mengutamakan kualitas dan transparansi dalam setiap tahap pembangunan website Anda.</p>
          </div>

          <div className="process-grid">
            {[
              { step: "01", title: "Diskusi Awal", desc: "Kami dengarkan ide Anda dan susun strategi terbaik untuk mencapainya tanpa jargon yang membingungkan." },
              { step: "02", title: "Desain Visual", desc: "Pembuatan tampilan modern dan user-friendly yang dirancang khusus untuk meningkatkan kredibilitas bisnis Anda." },
              { step: "03", title: "Proses Bangun", desc: "Coding menggunakan teknologi terbaru untuk hasil yang kencang, aman, dan responsif di semua perangkat." },
              { step: "04", title: "Siap Pakai", desc: "Website resmi diluncurkan dengan optimasi SEO dan dukungan teknis yang selalu siap diandalkan." }
            ].map((item, i) => (
              <div key={i} className="process-card">
                <div className="process-number">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section-container border-t border-[#27272a]">
          <div className="text-center">
            <div className="tag">Teknologi Modern</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Standard Teknologi Kami</h2>
            <p className="text-[#a1a1aa] mb-8 max-w-xl mx-auto">Menggunakan industri standar terbaik untuk memastikan website Anda cepat, aman, dan mudah dikembangkan.</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-70 hover:opacity-100 transition-opacity">
              {[
                { name: "Next.js", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18.7363 19.3331L10.3702 8.65349V17.3912H8.38466V6.60877H10.3702L18.7363 17.3912V19.3331Z" fill="white" /></svg> },
                { name: "React", icon: <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="#61DAFB" /><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
                { name: "Tailwind", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8" /></svg> },
                { name: "TypeScript", icon: <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" fill="#3178C6" /><path d="M113.6,90.3c0,4.8-1.4,8.5-4.1,11c-2.7,2.5-6.5,3.8-11.4,3.8c-3.1,0-5.8-0.3-8-0.9c-2.2-0.6-4.5-1.7-6.9-3.2 l3.3-8.8c3.2,2.3,6.2,3.4,9.2,3.4c2,0,3.6-0.4,4.7-1.3c1.1-0.9,1.7-2.1,1.7-3.7c0-1.4-0.4-2.5-1.1-3.3c-0.7-0.8-1.8-1.6-3.2-2.3 c-2.3-1.1-4.7-2.2-7.1-3.4c-2.4-1.2-4.4-2.8-5.9-4.8c-1.5-2-2.3-4.5-2.3-7.5c0-4.6,1.4-8.2,4.3-10.7c2.8-2.5,6.7-3.8,11.5-3.8 c2.5,0,4.7,0.3,6.7,0.8c2,0.5,3.8,1.2,5.5,2l-2.8,8.8c-2.4-1.5-4.8-2.2-7.2-2.2c-1.7,0-3.1,0.4-3.9,1.1c-0.9,0.7-1.3,1.7-1.3,2.9 c0,1.2,0.4,2.2,1.2,3.1c0.8,0.8,2,1.7,3.6,2.6c1,0.5,2.7,1.4,5,2.5c2.3,1.1,4.3,2.5,6,4.3C112.7,82.7,113.6,86,113.6,90.3z" fill="white" /><path d="M57.4,62.2v46H46.6v-46H30.4v-9.5h43.1v9.5H57.4z" fill="white" /></svg> },
                { name: "Vercel", icon: <svg width="40" height="40" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" /></svg> },
                { name: "Framer Motion", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L12 12L24 0H0ZM0 12L12 24V12H0ZM12 12V24L24 12H12Z" fill="white" /></svg> }
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-4 group/tech">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0f0f0f] border border-[#27272a] flex items-center justify-center group-hover/tech:border-blue-500/50 group-hover/tech:bg-blue-500/5 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase group-hover/tech:text-[#fafafa] transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </section>
  );
}
