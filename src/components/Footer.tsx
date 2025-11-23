import { Divider } from "antd";
import FooterMenu from "./FooterMenu";
import FooterRights from "./FooterRights";

const Footer = () => {
  return (
    <footer className="pt-[80px] pb-[25px] px-[50px] flex flex-col justify-start items-center max-[830px]:p-[50px] 
      max-[430px]:p-[15px] max-[650px]:px-[50px] transition-all duration-500">
      <div className="w-[1100px] min-h-[100px] text-[18px] max-[1200px]:w-[100%]">
        <Divider className="border !border-[#313236]" />
        <FooterMenu />
        <Divider className="border !border-[#313236]" />
        <FooterRights />
      </div>
    </footer>
  );
};

export default Footer;
