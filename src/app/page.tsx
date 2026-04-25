import MinimalHero from "@/components/ui/hero-minimalism";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cubiqin | Studio Visual & Website Premium',
  description: 'Tempatnya bikin website estetik dan aplikasi mobile high-end. Kami mengubah visi bisnis Anda menjadi realitas digital yang memukau.',
};

export default function Home() {
  return (
    <main>
      <MinimalHero />
    </main>
  );
}
