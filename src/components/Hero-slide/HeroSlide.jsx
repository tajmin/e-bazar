import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-cube";
import "swiper/scss/mousewheel";
import "./HeroSlide.styles.scss";

const HeroSlide = () => {
  return (
    <div className="slide-container">
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
    </div>
  );
};

export default HeroSlide;
