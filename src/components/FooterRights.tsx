import { useTranslations } from 'next-intl';
import React from 'react'

const FooterRights = () => {
      const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-[10px] flex justify-between">
          <div className="text-[16px]">
            © {currentYear} Grave Care. {t("allRights")}
          </div>
          <p className="hover:text-[#410caa] transition duration-500 cursor-pointer">
            Privacy Policy
          </p>
        </div>
  )
}

export default FooterRights;