
import { Button } from "antd";
import { useTranslations } from "next-intl";

const AuthButtons = () => {
  const t = useTranslations();

  return (
    <div className="flex gap-[10px] mr-[20px]">
      <Button className="!bg-transparent !shadow-none !text-[16px] transition !duration-500 hover:!text-[#c816fa]" type="primary">{t("register")}</Button>
      <Button className="!bg-transparent !shadow-none !text-[16px] transition !duration-500 hover:!text-[#c816fa]" type="primary">{t("login")}</Button>
    </div>
  );
};

export default AuthButtons;
