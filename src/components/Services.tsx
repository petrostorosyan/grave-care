import { useTranslations } from "next-intl";
import SpotlightCard from "./SpotLightCard";
import ScrollFloat from "./ScrollFloatText";
import { services } from "@/data/servicesData";

const Services = () => {
  const tCommon = useTranslations();
  const t = useTranslations("homePage.services");

  return (
    <section id="services" className="px-[50px] py-[30px] mb-[80px] text-center max-[650px]:p-[20px] max-[430px]:p-[15px] max-[430px]:mb-[65px]">
      <div className="text-[32px] font-bold mb-[80px]">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          {tCommon("services")}
        </ScrollFloat>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex flex-wrap justify-center items-center gap-[70px] max-[650px]:w-[100%] max-[430px]:gap-[50px]">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              className="custom-spotlight-card"
              spotlightColor="rgba(39, 4, 110, 1)"
            >
              <div className="w-[550px] h-[250px] p-[30px] flex flex-col justify-center items-center rounded-xl 
                 transition-all duration-500 hover:-translate-y-1 group max-[650]:w-[450px] 
                 max-[500]:w-[380px] max-[500]:h-[200px] max-[430]:h-[170px] max-[500]:p-[15px] max-[430]:w-[300px]">
                <h3 className="text-[28px] group-hover:text-[#410caa] font-semibold mb-[20px] transition-text duration-500 
                max-[500]:text-[24px] max-[430]:text-[20px]">
                  {t(service.title)}
                </h3>
                <p className="group-hover:text-[#410caa] transition-all duration-500 max-[430]:text-[14px]">
                  {t(service.desc)}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
