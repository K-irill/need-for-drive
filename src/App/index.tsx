import React from "react";
import SideBar from "../components/SideBar";
import { ReactComponent as LabelCity } from "../images/label_city.svg";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-content">
        <header className="main-content__header">
          <div className="name-company">
            <span>Need for drive</span>
          </div>
          <div className="city">
            <LabelCity />
            <span>Ульяновск</span>
          </div>
        </header>
        <div className="namecontent">
          <div className="title">
            <h1>
              Каршеринг <span>Need for drive</span>
            </h1>
          </div>
          <p>Поминутная аренда авто твоего города</p>
          <button>Забронировать</button>
        </div>
        <footer className="main-content__footer">
          <span className="copyright">© 2016-2019 «Need for drive»</span>
          <span className="telephone">8 (495) 234-22-44</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
