"use client";

import ReactCountryFlag from "react-country-flag";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const MobileLocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="flex items-center gap-[25px]">
      {[
        { code: "hy", flag: "AM" },
        { code: "en", flag: "GB" },
        { code: "ru", flag: "RU" },
      ].map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          className={`rounded-full transition-all duration-200`}
        >
          <ReactCountryFlag
            countryCode={lang.flag}
            svg
            style={{ width: "30px", height: "23px", border: "1px solid #8B3BFB" }}
          />
        </button>
      ))}
    </div>
  );
};

export default MobileLocaleSwitcher;
