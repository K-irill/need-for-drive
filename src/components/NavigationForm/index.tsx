import React from "react";
import "./NavigationForm.scss";
import { ReactComponent as ArrowRight } from "../../images/arrow_right.svg";

const NavigationFrom = () => {
  const items = ["Местоположение", "Модель", "Дополнительно", "Итого"];

  return (
    <div className="form-order">
      <div className="form-order__navigation">
        <div className="form-step">
          {items.map((item, i) => {
            if (i === items.length - 1)
              return (
                <div className="form-step__item" key={i}>
                  <span className="name-step">{item}</span>
                </div>
              );

            return (
              <div className="form-step__item" key={i}>
                <span className="name-step">{item}</span>
                <ArrowRight />
              </div>
            );
          })}
        </div>
      </div>
      <div className="form-order__content">
        <div className="form-content">step 1</div>
        <div className="information-order"></div>
      </div>
    </div>
  );
};

export default NavigationFrom;
