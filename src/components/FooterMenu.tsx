"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface IMenu {
  id: number;
  label: string;
  link: string;
}

const menu: IMenu[] = [
  {
    id: 1,
    label: "home",
    link: "/",
  },
  {
    id: 2,
    label: "services",
    link: "/",
  },
  {
    id: 3,
    label: "packages",
    link: "/",
  },
  {
    id: 4,
    label: "about",
    link: "/",
  },
];

const socials: IMenu[] = [
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
    label: "Tik Tok",
    link: "#",
  },
];

const FooterMenu = () => {
  const t = useTranslations();

  return (
    <div className="w-full flex justify-between">
      <div>
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold">
          {t("menu")}
        </p>
        <div className="flex flex-col justify-start items-start">
          {menu.map((menuItem) => {
            return (
              <Link
                key={menuItem.id}
                href={menuItem.link}
                className="hover:text-[#c816fa] transition duration-500 cursor-pointer mb-[5px]"
              >
                {t(menuItem.label)}
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold">
          {t("footer.socials")}
        </p>
        <div className="flex flex-col justify-start items-start">
          {socials.map((social) => {
            return (
              <a
                key={social.id}
                href={social.link}
                className="hover:text-[#c816fa] transition duration-500 cursor-pointer mb-[5px]"
              >
                {social.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-[24px] text-[#313236] mb-[10px] font-bold">
          Get In Touch
        </p>
        <a
          href="#"
          className="hover:text-[#c816fa] transition duration-500 cursor-pointer mb-[5px]"
        >
          info@gmail.com
        </a>
        <a
          href="#"
          className="hover:text-[#c816fa] transition duration-500 cursor-pointer"
        >
          +374 77 xx xx xx
        </a>
      </div>
    </div>
  );
};

export default FooterMenu;
