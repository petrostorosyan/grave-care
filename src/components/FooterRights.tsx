import { useTranslations } from "next-intl";
import React from "react";

const FooterRights = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-[10px] flex justify-between max-[950px]:flex-col-reverse">
      <div className="text-[16px] max-[430px]:text-[14px]">
        © {currentYear} Grave Care. {t("allRights")}
      </div>
      <p className="hover:text-[#410caa] transition duration-500 cursor-pointer max-[800px]:text-[16px] max-[950px]:mb-[10px]">
        {t("privacyPolicy")}
      </p>
    </div>
  );
};

export default FooterRights;
