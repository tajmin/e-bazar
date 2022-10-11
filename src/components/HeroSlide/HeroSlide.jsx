import React from "react";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/mousewheel";
import "swiper/scss/pagination";
import { SlideContainer } from "./HeroSlide.styles";

const HeroSlide = () => {
  return (
    <SlideContainer>
      <Swiper
        className="full-w-h"
        modules={[Mousewheel, Pagination]}
        direction={"vertical"}
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img className="full-image" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="full-image" src={banner2} alt="" />
        </SwiperSlide>
      </Swiper>
    </SlideContainer>
  );
};

export default HeroSlide;
