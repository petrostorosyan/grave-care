"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import AuthButtons from "./AuthButtons";

const Navigation = () => {
  const path = usePathname();
  const params = useSearchParams();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 150) {
        const isScrollingUp = prevScrollPos > currentScrollPos;
        if (navbar) {
          navbar.style.top = isScrollingUp ? "20px" : "-136px";
        }

        prevScrollPos = currentScrollPos;
      } else {
        if (navbar) navbar.style.top = "20px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.style.top = "20px";
    }
  }, [path, params]);

  return (
    <div
      ref={navbarRef}
      className="px-[25px] py-[15px] border border-[#dadce0] shadow-[0_3px_10px_0_rgba(31,31,31,0.08)] rounded-[35px]
       flex justify-between items-center backdrop-blur-[7px]
        transition-all 
        fixed top-0 block transition-[top] duration-300 z-[999]
        hover:shadow-[0_3px_10px_0_rgba(31,31,31,0.14)]
        hover:border-[#dadce0]"
    >
      <span className="mr-[30px]">logo</span>
      <Navbar />
      <AuthButtons />
      <LocaleSwitcher />   
    </div>
  );
};

export default Navigation;
