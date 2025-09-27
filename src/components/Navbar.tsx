"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useEffect } from "react";

type NavItem = {
  href: string;
  label: string;
  scrollTo?: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const navItems: NavItem[] = [
    { href: "/", label: "home" },
    { href: "/services", label: "services", scrollTo: "services" },
    { href: "/packages", label: "packages", scrollTo: "packages" },
    { href: "/about", label: "about" },
  ];

  // const isActive = (href: string): boolean => pathname === href;
  // ${isActive(href) ? "text-[#c816fa]" : "text-white-700"}

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
    <nav className="h-full flex gap-[40px] justify-between items-center mr-[100px] ml-[50px]">
      {navItems.map(({ href, label, scrollTo }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-[#c816fa] transition duration-500 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(scrollTo);
          }}
        >
          {t(label)}
        </Link>
      ))}
    </nav>
  );
}
