import { Divider } from "antd";
import FooterMenu from "./FooterMenu";
import FooterRights from "./FooterRights";

const Footer = () => {
  return (
    <footer className="pt-[80px] pb-[25px] px-[50px] flex flex-col justify-start items-center">
      <div className="w-[1100px] min-h-[100px] text-[18px]">
        <FooterMenu />
        <Divider className="border !border-[#313236]" />
        <FooterRights />
      </div>
    </footer>
  );
};

export default Footer;
