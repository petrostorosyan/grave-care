"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import LocaleSwitcher from "./LocaleSwitcher";
import AuthButtons from "./AuthButtons";
import Logo from "@/shared/Logo";
import { PhoneOutlined } from "@ant-design/icons";
import MobileMenu from "@/components/MobileMenu";
import useScreenSize from "@/hooks/useScreenSize";

const Navigation = () => {
  const path = usePathname();
  const params = useSearchParams();
  const navbarRef = useRef<HTMLDivElement>(null);
  const { width: screenWidth , height } = useScreenSize();
  const [logoSize, setLogoSize] = useState({ w: 80, h: 40 });

  useEffect(() => {
    if (screenWidth > 730) {
      setLogoSize({ w: 80, h: 40 });
    } else {
      setLogoSize({ w: 60, h: 30 });
    }
  }, [screenWidth]);

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
        flex justify-between items-center backdrop-blur-[7px] transition-all fixed top-5 block transition-[top] 
        duration-300 z-[999] hover:shadow-[0_3px_10px_0_rgba(31,31,31,0.14)] hover:border-[#dadce0] 
        max-[900px]:w-[740px] max-[900px]:px-[20px] max-[780px]:w-[90%] max-[780px]:py-[12px]"
    >
      <Logo width={logoSize.w} height={logoSize.h} />
      <Navbar />
      {/* <AuthButtons /> */}
      <div className="w-[65px] items-center justify-between min-[780px]:flex max-[780px]:hidden">
        <a href="tel:+37477xxxxxx">
          <PhoneOutlined className="text-[20px] hover:!text-[#c816fa] transition duration-500" />
        </a>
        <LocaleSwitcher />
      </div>

      <MobileMenu />
    </div>
  );
};

export default Navigation;
