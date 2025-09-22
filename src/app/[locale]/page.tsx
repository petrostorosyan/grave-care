import { Link } from '@/i18n/navigation';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Hero from '@/components/Hero';

export default function Home({params}: {params: Promise<{locale:string}>}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  // const t = useTranslations('home');


  return (
    <main className="w-full h-[1500px]">
      <Hero />
    </main>
  );
}