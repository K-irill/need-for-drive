import React from "react";
import "./NavigationForm.scss";
import { ReactComponent as ArrowRight } from "../../images/arrow_right.svg";

const NavigationFrom = () => {
  const items = ["Местоположение", "Модель", "Дополнительно", "Итого"];

  return (
    <div className="navigation">
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
  );
};

export default NavigationFrom;
