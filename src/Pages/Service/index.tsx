import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Service.scss";

const Service = () => {
  return (
    <div className="service">
      <div className="service__header">
        <Header />
      </div>
      <div className="service__main">
        <h1 className="service__title">Обслуживание</h1>
        <p className="service__content">Автомобиль проходит еженедельное ТО</p>
        <Link className="btn-booking" to={"/order"}>
          Забронировать
        </Link>
      </div>
      <div className="service__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
