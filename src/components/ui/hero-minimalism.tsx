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
                { name: "Tailwind", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.018c1.38-2.608 3.75-3.083 8.25-2.375C17.25 10.768 15 11.718 15 14.568c0 2.85 2.25 3.325 3 4.75-.75.475-3 1.187-5.25-.475-1.5-1.107-1.5-3.325-3.75-4.75C6.75 12.668 4.5 13.143 4.5 16.223 4.5 19.303 6.75 20.015 7.5 21c-2.25-.475-4.5-2.138-4.5-4.988 0-2.85 2.25-3.325 3-4.75 1.5.713 3 1.188 3.75.475 1.125-1.069.75-2.85 2.25-5.719z" fill="#38BDF8" /></svg> },
                { name: "TypeScript", icon: <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5H126.5V126.5H1.5V1.5Z" fill="#3178C6" /><path d="M103.543 99.3045C102.661 100.282 101.442 101.21 99.8872 102.088C98.3323 102.966 96.4497 103.405 94.2389 103.405C91.9568 103.405 89.8787 102.822 88.0044 101.656C86.1302 100.491 84.6644 100.463 83.6068 101.572C82.5492 102.68 82.5518 103.882 83.6146 105.176C85.7335 107.764 88.5991 109.688 92.2115 110.949C95.8238 112.21 99.8139 112.84 104.181 112.84C108.799 112.84 112.923 111.751 116.551 109.572C120.18 107.393 122 104.095 122 99.678C122 96.0825 120.906 93.3072 118.718 91.3522C116.531 89.3973 113.12 87.7118 108.485 86.2959C105.076 85.2758 102.61 84.4715 101.087 83.8831C99.5647 83.2946 98.4418 82.5843 97.7176 81.7523C96.9935 80.9204 96.6315 79.9142 96.6315 78.7339C96.6315 77.2917 97.2343 76.1158 98.4402 75.2062C99.6461 74.2966 101.378 73.8418 103.637 73.8418C105.772 73.8418 107.607 74.3496 109.141 75.3653C110.676 76.3811 111.954 77.8344 112.977 79.7253C113.578 80.8291 114.397 81.2587 115.432 81.0142C116.467 80.7697 117.151 80.0152 117.483 78.7505C118.064 76.5413 116.711 74.4533 114.425 72.4864C111.83 70.2435 108.204 69.1221 103.548 69.1221C99.0438 69.1221 95.0441 70.1878 91.5492 72.3193C88.0544 74.4507 86.307 77.5878 86.307 81.7303C86.307 84.6975 87.1652 87.1352 88.8817 89.0433C90.5982 90.9515 93.6335 92.5152 97.9876 93.7346C102.392 94.9754 105.353 96.0094 106.87 96.8364C108.388 97.6635 109.529 98.71 110.292 99.9758C111.056 101.242 111.438 102.766 111.438 104.549C111.438 106.9 110.655 108.825 109.088 110.323C107.521 111.821 105.127 112.57 101.905 112.57C96.9691 112.57 93.2033 111.238 90.6074 108.575C89.9238 107.873 89.0838 107.619 88.0874 107.813C87.0911 108.006 86.4172 108.625 86.0661 109.671C85.5768 111.127 86.2922 112.355 88.2123 113.355C92.4277 115.549 97.5587 116.647 103.605 116.647C109.288 116.647 113.916 115.292 117.488 112.582C121.06 109.872 122.846 105.86 122.846 100.547C122.846 96.223 121.516 92.88 118.855 90.518C116.194 88.156 111.956 86.1364 106.14 84.4593C102.748 83.4756 100.325 82.6841 98.8687 82.0848C97.4128 81.4855 96.3475 80.7628 95.6729 79.9167C94.9982 79.0706 94.6609 78.0465 94.6609 76.8443C94.6609 75.3765 95.2334 74.1797 96.3783 73.2539C97.5232 72.3282 99.1678 71.8653 101.312 71.8653C103.34 71.8653 105.082 72.3503 106.539 73.3204C107.995 74.2905 109.213 75.69 110.192 77.5183C110.763 78.5835 111.54 78.9912 112.523 78.7411C113.506 78.4911 114.156 77.728 114.474 76.452C115.029 74.2238 113.743 72.1039 111.564 70.1118C109.096 67.8504 105.65 66.7196 101.226 66.7196C96.9452 66.7196 93.1439 67.8043 89.8221 69.9737C86.5002 72.1432 84.8392 75.3223 84.8392 79.511C84.8392 82.5159 85.6548 84.9859 87.286 86.9209C88.9172 88.856 91.802 90.4395 95.9405 91.6716C100.125 92.9377 102.935 93.9904 104.37 94.8296C105.805 95.6688 106.89 96.7286 107.625 98.0089C108.351 99.2892 108.713 100.832 108.713 102.639C108.713 105.011 107.971 106.953 106.485 108.465C105 109.977 102.727 110.733 99.6644 110.733C94.9739 110.733 91.3951 109.383 88.928 106.681C88.2785 105.968 87.4801 105.711 86.5328 105.908C85.5855 106.105 84.9451 106.732 84.6117 107.791C84.1468 109.264 84.8267 110.508 86.6514 111.523C90.6558 113.743 95.5342 114.853 101.287 114.853C106.993 114.853 111.644 113.483 115.239 110.743C118.835 108.003 120.632 103.957 120.632 98.604" fill="white" stroke="#3178C6" strokeWidth="2" /><path d="M43.2 114V42H30.4V29.8H69.4V42H56.5V114H43.2Z" fill="white" /></svg> },
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
