import MinimalHero from "@/components/ui/hero-minimalism";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cubiqin | Agency Digital — Website, Aplikasi Android & Logo',
  description: 'Agency digital terpercaya spesialis pembuatan Website, Aplikasi Android, dan Logo & Branding. Wujudkan impian digital bisnis Anda bersama Cubiqin.',
};

export default function Home() {
  return (
    <main>
      <MinimalHero />
    </main>
  );
}
