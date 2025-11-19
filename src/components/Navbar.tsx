"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/data/navigationData";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Navbar() {
  const t = useTranslations();
  const scrollToSection = useScrollToSection({ offset: 10 });

  // const isActive = (href: string): boolean => pathname === href;
  // ${isActive(href) ? "text-[#c816fa]" : "text-white-700"}

  return (
    <nav
      className="h-full gap-[40px] justify-between items-center mr-[60px] ml-[60px] max-[930px]:gap-[20px] transition-all 
        duration-500  max-[930px]:mr-[30px] max-[930px]:ml-[30px] min-[780px]:flex max-[780px]:hidden"
    >
      {navItems.map(({ href, label, scrollTo }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-[#c816fa] transition duration-500 transition-colors"
          onClick={(e) => {
            if (scrollTo) {
              e.preventDefault();
              scrollToSection(scrollTo, href);
            }
          }}
        >
          {t(label)}
        </Link>
      ))}
    </nav>
  );
}
