import { useLocale, useTranslations } from "next-intl";
// import DarkVeil from "./DarkVeil";
import { Button } from "antd";
import BlurText from "./Blurtext";
import AnimatedContent from "./AnimatedContent";
import Plasma from "./Plasma";

const Hero = () => {
  const t = useTranslations("homePage.hero");
  const locale = useLocale(); 

  return (
    <section className="w-full h-screen relative">
      {/* <DarkVeil /> */}
      <Plasma />
      <div className="w-full text-white p-[50px] absolute top-[25%] flex justify-center items-center flex-col 
          max-[650px]:p-[30px] max-[430px]:p-[15px]">
          <BlurText
            text={t("title")}
            delay={150}
            animateBy="words"
            direction="top"
            className={`${locale == "ru" ? "w-[1000px]" : "w-[1030px]"} text-[clamp(1.6rem,3vw+0.5rem,3.8rem)]
             font-bold mb-[40px] text-center transition-all duration-500 
            max-[1200px]:w-[750px] max-[930px]:w-[600px] max-[650px]:w-[100%]`}
          />

          <BlurText
            text={t("description")}
            delay={150}
            animateBy="words"
            direction="top"
            className="w-[900px] text-[clamp(1rem,2vw+0.5rem,2rem)] font-bold mb-[80px] text-center transition-all 
            duration-500 max-[1200px]:w-[750px] max-[930px]:w-[600px] max-[650px]:w-[100%]"
          />

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={1.2}
          // ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <Button
            className="!bg-[#212226] border !border-[#313236] !shadow-none !text-[16px] !px-[40px] !py-[25px] !rounded-[30px] !text-[20px]
          transition !duration-500 hover:!text-[#c816fa]"
            type="primary"
          >
            {t("order")}
          </Button>
        </AnimatedContent>
        {/* <h1 className="text-[48px] mb-[40px]">{t("title")}</h1> */}
      </div>
    </section>
  );
};

export default Hero;
