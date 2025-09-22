import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['hy', 'ru', 'en'],
  defaultLocale: 'hy',
  localePrefix: 'as-needed'
});