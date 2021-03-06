import React from "react";
import "./Slider.scss";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

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
        <div className="information swiper__information ">
          <h2 className="information__header">Бесплатная парковка</h2>
          <p className="information__content">
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <Link to={"./parking"} className="information__button">
            Подробнее
          </Link>
        </div>
        <img src={require("../../images/first-slide.jpg")} alt="first-slide" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__information">
          <h2 className="information__header">Страховка</h2>
          <p className="information__content">
            Полная страховка страховка автомобиля
          </p>
          <Link
            to={"./insurance"}
            className="information__button information__button_second"
          >
            Подробнее
          </Link>
        </div>
        <img
          src={require("../../images/second-slide.jpg")}
          alt="second-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__information">
          <h2 className="information__header">Бензин</h2>
          <p className="information__content">
            Полный бак на любой заправке города за наш счёт
          </p>
          <Link
            to={"./petrol"}
            className="information__button information__button_third"
          >
            Подробнее
          </Link>
        </div>
        <img src={require("../../images/third-slide.jpg")} alt="third-slide" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__information">
          <h2 className="information__header">Обслуживание</h2>
          <p className="information__content">
            Автомобиль проходит еженедельное ТО
          </p>
          <Link
            to={"./service"}
            className="information__button information__button_four"
          >
            Подробнее
          </Link>
        </div>
        <img src={require("../../images/four-slide.jpg")} alt="four-slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
