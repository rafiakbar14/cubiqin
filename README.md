# Cubiqin.id

Landing page & situs multi-halaman untuk **Cubiqin.id** — studio digital creative untuk UMKM dan bisnis lokal Indonesia (website, logo, brand identity, kelola feed Instagram, dan Meta Ads).

## Struktur

```
index.html              # Halaman utama (hero, layanan, paket, portofolio, audit, FAQ, dll)
layanan/                # Landing page per layanan (untuk Meta Ads)
  website.html
  logo.html
  brand-identity.html
  feed-instagram.html
  meta-ads.html
blog/                   # Blog
  index.html            # Daftar artikel
  template-artikel.html # Template artikel (duplikat untuk artikel baru)
assets/
  theme.css             # Token tema (dark/light), komponen, responsive
  site.js               # Theme toggle (persist), FAQ, WhatsApp, share, menu mobile
robots.txt, sitemap.xml, llms.txt   # SEO / GEO
```

## Fitur
- Tema gelap/terang dengan toggle (tersimpan di `localStorage`).
- Responsive + menu hamburger di mobile.
- Tombol WhatsApp & share otomatis.
- Structured data (JSON-LD), meta sosial, dan `llms.txt` untuk SEO/GEO.

## Pengembangan
Situs statis murni — buka `index.html` langsung di browser, atau jalankan server statis apa pun.

## Konfigurasi
- Nomor WhatsApp: ubah `WA_NUMBER` di [`assets/site.js`](assets/site.js).
- Domain: ganti `https://www.cubiqin.id/` di `canonical`, `sitemap.xml`, `robots.txt`, dan `llms.txt`.
