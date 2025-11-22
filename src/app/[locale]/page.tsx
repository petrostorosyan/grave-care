import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import Packages from '@/components/Packages';
import Faq from '@/shared/Faq';

export default function Home({params}: {params: Promise<{locale:string}>}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="w-full">
      <Hero />
      <Services />
      <OurWork />
      <Packages />
      <Faq />
    </main>
  );
}