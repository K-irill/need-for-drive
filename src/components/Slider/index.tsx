import React from "react";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow_right.svg";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__btn-container">
        <button className="slider__btn-left">
          <ArrowLeft />
        </button>
        <button className="slider__btn-right">
          <ArrowRight />
        </button>
      </div>
      <div className="slide">
        <img src={require("../../images/first-slide.jpg")} alt="first-slide" />
        {/* <img
          src={require("../../images/second-slide.jpg")}
          alt="second-slide"
        />
        <img src={require("../../images/third-slide.jpg")} alt="third-slide" />
        <img src={require("../../images/four-slide.jpg")} alt="four-slide" /> */}
      </div>
    </div>
  );
};

export default Slider;
