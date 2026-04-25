import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cubiqin - Studio Digital & Jasa Website Premium",
  description: "Bikin website estetik, kencang, dan profesional bersama Cubiqin. Kami membikinkan ('Aku Bikinkan') solusi digital high-end untuk bisnis Anda.",
  keywords: ["jasa website", "website premium", "desain web estetik", "cubiqin", "pembuatan aplikasi android", "digital marketing agency"],
  openGraph: {
    title: "Cubiqin - Studio Digital Premium",
    description: "Solusi pembuatan website dan aset digital high-end dengan sentuhan manusiawi.",
    type: "website",
    locale: "id_ID",
    url: "https://cubiqin.com",
    siteName: "Cubiqin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
