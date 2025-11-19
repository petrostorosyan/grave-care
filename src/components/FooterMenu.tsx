"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface IFooterMenu {
  id: number;
  label: string;
  link: string;
  scrollTo?:string
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
    scrollTo: "services"
  },
  {
    id: 3,
    label: "packages",
    link: "/packages",
    scrollTo: "packages"
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
    label: "Tik Tok",
    link: "#",
  },
];

const FooterMenu = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

   const handleScrollToSection = (id?: string) => {
    if (!id) return;
    
    const section = document.getElementById(id);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 50, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

  useEffect(() => {
    const scrollToId = sessionStorage.getItem("scrollToId");
    if (scrollToId && pathname === "/") {
      sessionStorage.removeItem("scrollToId");
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - 50, behavior: "smooth" });
        }, 300);
      }
    }
  }, [pathname]);

  return (
    <div className="w-full flex justify-between mb-[50px]">
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
                className="hover:text-[#410caa] transition duration-500 cursor-pointer mb-[5px]"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(menuItem.scrollTo);
                }}
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
                className="hover:text-[#410caa] transition duration-500 cursor-pointer mb-[5px]"
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
          className="hover:text-[#410caa] text-[18px] transition duration-500 cursor-pointer mb-[5px]"
        >
          info@gmail.com
        </a>
        <a
          href="#"
          className="hover:text-[#410caa] text-[18px]  transition duration-500 cursor-pointer"
        >
          +374 77 xx xx xx
        </a>
      </div>
    </div>
  );
};

export default FooterMenu;
