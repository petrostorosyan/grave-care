"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();

  const navItems: NavItem[] = [
    { href: "/", label: "home" },
    { href: "/services", label: "services" },
    { href: "/contact", label: "contacts" },
    { href: "/about", label: "about" },
  ];

  const isActive = (href: string): boolean => pathname === href;

  return (
    <nav className="h-full flex gap-[40px] justify-between items-center mr-[100px]">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-[#c816fa] transition duration-500 transition-colors ${
            isActive(href) ? "text-[#c816fa]" : "text-white-700"
          }`}
        >
          {t(label)}
        </Link>
      ))}
    </nav>
  );
}
