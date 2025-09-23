import { Divider } from "antd";
import { useTranslations } from "next-intl";
import FooterMenu from "./FooterMenu";



const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();



  return (
    <footer className="pt-[80px] pb-[15px] px-[50px] flex flex-col justify-start items-center">
      <div className="w-[1000px] min-h-[100px]">
        <FooterMenu /> 

        <Divider className="border !border-[#313236]" />
        <div className="mt-[10px] flex justify-between">
          <div>
            © {currentYear} Grave Care. {t("allRights")}
          </div>
          <p className="hover:text-[#c816fa] transition duration-500 cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
