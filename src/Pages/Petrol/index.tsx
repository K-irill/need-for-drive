import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Petrol.scss";

const Petrol = () => {
  return (
    <div className="petrol">
      <div className="petrol__header">
        <Header />
      </div>
      <div className="petrol__main">
        <h1 className="petrol__title">Бензин</h1>
        <p className="petrol__content">
          Полный бак на любой заправке города за наш счёт
        </p>
        <Link className="btn-booking" to={"/order"}>
          Забронировать
        </Link>
      </div>
      <div className="petrol__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Petrol;
