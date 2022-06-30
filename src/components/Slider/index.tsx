import React from "react";
import "./Slider.scss";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={require("../../images/first-slide.jpg")} alt="first-slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../../images/second-slide.jpg")}
          alt="second-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../../images/third-slide.jpg")} alt="third-slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../../images/four-slide.jpg")} alt="four-slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
