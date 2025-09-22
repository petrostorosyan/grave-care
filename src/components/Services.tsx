import { useTranslations } from "next-intl";
import SpotlightCard from "./SpotLightCard";
import ScrollFloat from "./ScrollFloatText";

const Services = () => {
  const tCommon = useTranslations();
  const t = useTranslations("homePage.services");

  const services = [
    {
      id: 1,
      title: "cleaningMonuments.title",
      desc: "cleaningMonuments.description",
    },
    { id: 2, title: "flowerCare.title", desc: "flowerCare.description" },
    { id: 3, title: "weedRemoval.title", desc: "weedRemoval.description" },
    { id: 4, title: "photoReport.title", desc: "photoReport.description" },
  ];

  return (
    <section className="px-[50px] py-[30px] text-center">
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

      {/* <h2 className="text-[32px] font-bold mb-[80px]">{tCommon("services")}</h2> */}

      {/* <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"> */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex flex-wrap justify-center items-center gap-[70px]">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              className="custom-spotlight-card"
              spotlightColor="rgba(39, 4, 110, 1)"
            >
              <div className="w-[550px] h-[250px] p-[30px] flex flex-col justify-center items-center rounded-xl transition-transform duration-200 hover:-translate-y-1 group">
                <h3 className="text-[28px] group-hover:text-[#c816fa] font-semibold mb-[20px]">
                  {t(service.title)}
                </h3>
                <p className="group-hover:text-[#c816fa] transition-colors duration-500">
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
