import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home({params}: {params: Promise<{locale:string}>}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  // const t = useTranslations('home');


  return (
    <main className="w-full">
      <Hero />
      <Services />
      <div className='w-full h-[1200px]'></div>
    </main>
  );
}