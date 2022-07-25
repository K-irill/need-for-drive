import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Insurance.scss";

const Insurance = () => {
  return (
    <div className="insurance">
      <div className="insurance__header">
        <Header />
      </div>
      <div className="insurance__main">
        <h1 className="insurance__title">Страховка</h1>
        <p className="insurance__content">
          Полная страховка страховка автомобиля
        </p>
        <Link className="btn-booking" to={"/order"}>
          Забронировать
        </Link>
      </div>
      <div className="insurance__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Insurance;
