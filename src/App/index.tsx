import React from "react";
import SideBar from "../components/SideBar";
import Slider from "../components/Slider";
import { ReactComponent as LabelCity } from "../images/label_city.svg";
import "./App.scss";

const App = () => {
  return (
    <div className="page">
      <SideBar />
      <div className="page__main">
        <header className="page__header">
          <div className="name-company">
            <span>Need for drive</span>
          </div>
          <div className="city">
            <LabelCity />
            <span>Ульяновск</span>
          </div>
        </header>
        <div className="page__content">
          <div className="content__title">
            <h1>
              Каршеринг <br />
              <span>Need for drive</span>
            </h1>
          </div>
          <p>Поминутная аренда авто твоего города</p>
          <button>Забронировать</button>
        </div>
        <footer className="page__footer">
          <span className="copyright">© 2016-2019 «Need for drive»</span>
          <a href="tel:84952342244" className="telephone">
            8 (495) 234-22-44
          </a>
        </footer>
      </div>
      <Slider />
    </div>
  );
};

export default App;
