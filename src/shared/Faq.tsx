"use client";

import ScrollFloat from "@/components/ScrollFloatText";
import SpotlightCard from "@/components/SpotLightCard";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const itemTitleStyle =
  `w-[100%] flex text-white text-[18px] text-left transition-all duration-500 max-[800px]:text-[16px] max-[500px]:text-[14px] max-[430px]:text-[13px]`;
const itemDescriptionStyle =
  "bg-[#212226] text-left m-0 text-white text-[16px] p-[20px] max-[800px]:text-[15px] max-[500px]:text-[13px] max-[500px]:p-[10px] max-[430px]:text-[12px]";

const Faq = () => {
  const t = useTranslations("faq");

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <span className={itemTitleStyle}>{t("faqOne.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqOne.description")}</p>
      ),
    },
    {
      key: "2",
      label: <span className={itemTitleStyle}>{t("faqTwo.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqTwo.description")}</p>
      ),
    },
    {
      key: "3",
      label: <span className={itemTitleStyle}>{t("faqThree.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqThree.description")}</p>
      ),
    },
    {
      key: "4",
      label: <span className={itemTitleStyle}>{t("faqFour.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqFour.description")}</p>
      ),
    },
    {
      key: "5",
      label: <span className={itemTitleStyle}>{t("faqFive.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqFive.description")}</p>
      ),
    },
    {
      key: "6",
      label: <span className={itemTitleStyle}>{t("faqSix.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqSix.description")}</p>
      ),
    },
    {
      key: "7",
      label: <span className={itemTitleStyle}>{t("faqSeven.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqSeven.description")}</p>
      ),
    },
    {
      key: "8",
      label: <span className={itemTitleStyle}>{t("faqEight.title")}</span>,
      children: (
        <p className={itemDescriptionStyle}>{t("faqEight.description")}</p>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="px-[50px] py-[30px] mb-[80px] text-center transition-all duration-500 max-[600px]:p-[20px] max-[430px]:p-[15px]"
    >
      <div className="text-[32px] font-bold mb-[80px] max-[600px]:mb-[60px]">
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
        <div
          className="w-[900px] flex flex-wrap justify-center items-center gap-[70px] transition-all duration-500 max-[1000px]:w-[100%]"
        >
          <SpotlightCard
            className="custom-spotlight-card w-[100%]"
            spotlightColor="rgba(39, 4, 110, 1)"
          >
            <div
              className="w-[900px] p-[40px] flex justify-center items-center transition-all duration-500 
              max-[1000px]:w-[100%] max-[600px]:p-[30px] max-[430px]:p-[20px]"
            >
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
