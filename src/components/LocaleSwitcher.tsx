"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Select } from "antd";
import ReactCountryFlag from "react-country-flag";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

const options = [
  {
    value: "hy",
    label: (
      <span className="text-white">
        <ReactCountryFlag countryCode="AM" svg style={{ width: "22px", height: "22px", marginRight: 8 }} /> HY
      </span>
    ),
  },
  {
    value: "ru",
    label: (
      <span className="text-white">
        <ReactCountryFlag countryCode="RU" svg style={{ width: "22px", height: "22px", marginRight: 8 }} /> RU
      </span>
    ),
  },
  {
    value: "en",
    label: (
      <span className="text-white">
        <ReactCountryFlag countryCode="GB" svg style={{ width: "22px", height: "22px", marginRight: 8 }} /> EN
      </span>
    ),
  },
];

  return (
    <Select
      value={locale}
      onChange={switchLocale}
      className="w-[100px] !bg-transparent !border-none"
      classNames={{
        popup: {
          root: "!bg-[#27046e]", 
        },
      }}
      options={options}
    />
  );
}
