"use client";

import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface IFooterMenu {
  id: number;
  label: string;
  link: string;
  scrollTo?: string;
}

const menu: IFooterMenu[] = [
  {
    id: 1,
    label: "home",
    link: "/",
  },
  {
    id: 2,
    label: "services",
    link: "/services",
    scrollTo: "services",
  },
  {
    id: 3,
    label: "packages",
    link: "/packages",
    scrollTo: "packages",
  },
  {
    id: 4,
    label: "about",
    link: "/about",
  },
];

const socials: IFooterMenu[] = [
  {
    id: 1,
    label: "Facebook",
    link: "#",
  },
  {
    id: 2,
    label: "Instagram",
    link: "#",
  },
  {
    id: 3,
    label: "X",
    link: "#",
  },
];

const FooterMenu = () => {
  const t = useTranslations();
  const locale = useLocale();
  const scrollToSection = useScrollToSection({ offset: 25 });

  return (
    <div
      className="w-full flex justify-between flex-wrap gap-x-[50px] mb-[50px] transition-all duration-500
      max-[650px]:mb-[30px] max-[480px]:flex-nowrap max-[480px]:flex-col"
    >
      <div
        className={`w-max 
          ${
            locale == "hy"
              ? "max-[660px]:order-3"
              : locale == "ru"
              ? "max-[540px]:order-3"
              : "max-[490px]:order-3"
          }`}
      >
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold max-[430px]:text-[20px]">
          {t("menu")}
        </p>
        <div className="flex flex-col justify-start items-start max-[800px]:text-[16px]">
          {menu.map((menuItem) => {
            return (
              <Link
                key={menuItem.id}
                href={menuItem.link}
                className="hover:text-[#410caa] transition duration-500 cursor-pointer mb-[5px]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(menuItem.scrollTo ?? "", menuItem.link);
                }}
              >
                {t(menuItem.label)}
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`w-max max-[650px]:mb-[30px] 
        ${
          locale == "hy"
            ? "max-[660px]:order-2"
            : locale == "ru"
            ? "max-[540px]:order-2"
            : "max-[490px]:order-2"
        }`}
      >
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold max-[430px]:text-[20px]">
          {t("footer.socials")}
        </p>
        <div className="flex flex-col justify-start items-start max-[800px]:text-[16px]">
          {socials.map((social) => {
            return (
              <a
                key={social.id}
                href={social.link}
                className="hover:text-[#410caa] transition duration-500 cursor-pointer mb-[5px]"
              >
                {social.label}
              </a>
            );
          })}
        </div>
      </div>

      <div
        className={`flex flex-col w-max max-[650px]:mb-[30px] 
        ${
          locale == "hy"
            ? "max-[660px]:order-1"
            : locale == "ru"
            ? "max-[540px]:order-1"
            : "max-[490px]:order-1"
        }`}
      >
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold max-[430px]:text-[20px]">
          {t("footer.getInTouch")}
        </p>
        <a
          href="#"
          className="hover:text-[#410caa] text-[18px] transition duration-500 cursor-pointer mb-[5px] max-[800px]:text-[16px]"
        >
          info@gmail.com
        </a>
        <a
          href="#"
          className="hover:text-[#410caa] text-[18px]  transition duration-500 cursor-pointer max-[800px]:text-[16px]"
        >
          +374 77 xx xx xx
        </a>
      </div>
    </div>
  );
};

export default FooterMenu;
