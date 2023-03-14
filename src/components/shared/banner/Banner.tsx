import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import { bannerImg } from "../../../constants/banner";
import * as S from "./Banner.style";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

export const Banner = () => {
  return (
    <Swiper
      style={{
        width: "100vw",

        marginLeft: "calc(-50vw + 50%)",
      }}
      loop={true}
      effect={"fade"}
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      autoplay={{ delay: 5000 }}
      watchOverflow={true}
    >
      {bannerImg.map((b, index) => (
        <SwiperSlide key={index}>
          <S.BannerImg src={b.img} alt="banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
