import React, { useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { navItems } from "@/data/navigationData";
import Logo from "@/shared/Logo";
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { Divider } from 'antd';
import MobileLocaleSwitcher from "./MobileLocaleSwitcher";
// import SocialsMenu from "./socialsMenu/SocialsMenu";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const t = useTranslations();
  const scrollToSection = useScrollToSection({ offset: 10 });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="block max-[780px]:block min-[780px]:hidden">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={showDrawer}
            className="bg-transparent border-none cursor-pointer"
          >
            <LuMenu color="white" size={28} />
          </button>
        </div>
      </div>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className="w-full min-h-[50px]"
      >
        <div className="mb-5 w-full h-[50px] flex justify-between items-center">
          <Logo color='purple' width={60} height={30} />
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <CgClose size={30} color="#8B3BFB" onClick={() => setOpen(false)} />
          </div>
        </div>

        <nav className="flex flex-col gap-[7px]">
          {navItems.map(({ href, label, scrollTo }) => (
            <Link
              key={href}
              href={href}
              className="text-lg !text-[#8B3BFB] transition-colors duration-500"
              onClick={(e) => {
                if (scrollTo) {
                  e.preventDefault();
                  scrollToSection(scrollTo, href);
                  setOpen(false);
                }
              }}
            >
              {t(label)}
            </Link>
          ))}
        </nav>
        <Divider size="middle" />
        <div className="min-h-[10px] mb-[20px] flex justify-start align-center gap-[20px]">
          <FaFacebook size={26} color="#8B3BFB" />
          <LuInstagram size={26} color="#8B3BFB" />
        </div>
        <MobileLocaleSwitcher />
      </Drawer>
    </>
  );
};

export default MobileMenu;
