import { useLocale, useTranslations } from "next-intl";
import ScrollFloat from "./ScrollFloatText";
import SpotlightCard from "./SpotLightCard";
import { Button } from "antd";

interface IPackage {
  id: number;
  title: string;
  desc: string;
  price: string;
}

const Packages = () => {
  const t = useTranslations("homePage.packages");
  const tPrice = useTranslations();
  const locale = useLocale();

  const currencyMap: Record<string, string> = {
    hy: "֏",
    ru: "₽",
    en: "$",
  };

  const currentCurrency = currencyMap[locale] ?? "֏";

  const packagesData: IPackage[] = [
    {
      id: 1,
      title: "oneTimeVisit.title",
      desc: "oneTimeVisit.description",
      price: "20.000",
    },
    {
      id: 2,
      title: "monthlyCare.title",
      price: "50.000",
      desc: "monthlyCare.description",
    },
    {
      id: 3,
      title: "yearlyPackage.title",
      price: "160.000",
      desc: "yearlyPackage.description",
    },
  ];

  return (
    <div
      id="packages"
      className="w-full mb-[80px] px-[50px] py-[30px] flex flex-col justify-center items-center
    max-[600]:p-[30px] max-[420]:p-[15px]"
    >
      <div className="text-[32px] font-bold mb-[80px] max-[830]:mb-[50px] max-[420]:mb-[30px] transition-all duration-500">
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
        <div className="w-[1600px] flex flex-wrap justify-center items-center gap-[70px] max-[420]:gap-[50px]">
          {packagesData.map((item) => {
            return (
              <SpotlightCard
                key={item.id}
                className="custom-spotlight-card"
                spotlightColor="rgba(39, 4, 110, 1)"
              >
                <div
                  className="w-[435px] h-[270px] p-[40px] flex flex-col justify-between items-center 
                  rounded-xl transition-transform duration-200 hover:-translate-y-1 max-[500]:w-[350px] max-[500]:p-[25px] 
                  max-[500]:h-[200px] max-[420]:w-[300px] max-[420]:p-[15px] max-[420]:h-[180px]"
                >
                  <div className="w-full flex flex-col">
                    <h3 className="text-[28px] font-semibold mb-[20px] text-center max-[500]:text-[22px] max-[420]:text-[20px]">
                      {t(item.title)}
                    </h3>
                    <p className="transition-colors duration-500 text-center max-[500]:text-[14px]">
                      {t(item.desc)}
                    </p>
                  </div>

                  <div className="w-full mt-[40px] flex justify-between max-[500]:mt-[25px]">
                    <p>{`${tPrice("price")}: ${
                      item.price
                    }${currentCurrency}`}</p>
                    <Button
                      className="!bg-[transparent] !text-white transition duration-500 border !border-[#410caa]"
                      variant="solid"
                    >
                      {t("choose")}
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
