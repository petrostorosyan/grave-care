"use client";

import ScrollFloat from "@/components/ScrollFloatText";
import SpotlightCard from "@/components/SpotLightCard";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";


const Faq = () => {
const t = useTranslations("faq");

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <span className="text-white text-[18px]">{t("faqOne.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqOne.description")}</p>,
  },
  {
    key: "2",
    label: <span className="text-white text-[18px]">{t("faqTwo.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqTwo.description")}</p>,
  },
  {
    key: "3",
    label: <span className="text-white text-[18px]">{t("faqThree.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqThree.description")}</p>,
  },
  {
    key: "4",
    label: <span className="text-white text-[18px]">{t("faqFour.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqFour.description")}</p>,
  },
  {
    key: "5",
    label: <span className="text-white text-[18px]">{t("faqFive.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqFive.description")}</p>,
  },
  {
    key: "6",
    label: <span className="text-white text-[18px]">{t("faqSix.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqSix.description")}</p>,
  },
  {
    key: "7",
    label: <span className="text-white text-[18px]">{t("faqSeven.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqSeven.description")}</p>,
  },
  {
    key: "8",
    label: <span className="text-white text-[18px]">{t("faqEight.title")}</span>,
    children: <p className="bg-[#212226] m-0 text-white text-[16px] p-[20px]">{t("faqEight.description")}</p>,
  },
];

  return (
    <section
      id="services"
      className="px-[50px] py-[30px] mb-[80px] text-center"
    >
      <div className="text-[32px] font-bold mb-[80px]">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          {t("title")}
        </ScrollFloat>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex flex-wrap justify-center items-center gap-[70px]">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(39, 4, 110, 1)"
          >
            <div className="w-[1200px] p-[40px] flex justify-center items-center">
              <Collapse
                className="!w-full border !border-[#313236]"
                accordion
                items={items}
                expandIcon={({ isActive }) => (
                  <RightOutlined
                    style={{
                      color: "white",
                      fontSize: "14px",
                      transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                )}
              />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Faq;
