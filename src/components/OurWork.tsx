"use client";

import ScrollFloat from "./ScrollFloatText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ICarousel {
  id: number;
  src: string;
  alt: string;
}

const carouselData: ICarousel[] = [
  {
    id: 1,
    src: "/images/our-work/1.webp",
    alt: "one",
  },
  {
    id: 2,
    src: "/images/our-work/2.webp",
    alt: "two",
  },
  {
    id: 3,
    src: "/images/our-work/3.webp",
    alt: "three",
  },
  {
    id: 4,
    src: "/images/our-work/4.webp",
    alt: "four",
  },
  {
    id: 5,
    src: "/images/our-work/5.webp",
    alt: "five",
  },
];

const OurWork = () => {
  const t = useTranslations("homePage.ourWork");

  return (
    <section className="w-full mb-[80px] px-[50px] py-[30px] flex flex-col justify-center items-center
    max-[1100px]:p-[30px] max-[520px]:p-[20px] max-[450px]:p-[15px]">
      <div className="text-[32px] font-bold mb-[80px] transition duration-500 max-[680px]:mb-[40px] max-[520px]:mb-[25px]
      max-[520px]:text-[24px] max-[450px]:text-[20px]">
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

      <div className="w-[1000px] h-[400px] flex justify-center rounded-[6px] transition duration-500
          max-[1100px]:w-[800px] max-[1100px]:h-[300px] max-[880px]:w-[600px] max-[880px]:h-[240px]
          max-[680px]:w-[450px] max-[680px]:h-[200px] max-[520px]:w-[400px] max-[520px]:h-[180px]
          max-[450px]:w-[320px] max-[450px]:h-[150px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: ${
                className.includes("swiper-pagination-bullet-active")
                  ? "#410caa"
                  : "rgba(255,255,255,0.5)"
              }"></span>`;
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-[6px]"
        >
          {carouselData.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className="h-[270px] flex justify-center">
                <Image
                  width={1000}
                  height={270}
                  src={slide.src}
                  alt={slide.alt}
                  className="rounded-[6px] object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWork;
