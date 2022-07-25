import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Parking.scss";

const Parking = () => {
  return (
    <div className="parking">
      <div className="parking__header">
        <Header />
      </div>
      <div className="parking__main">
        <h1 className="parking__title">Бесплатная парковка</h1>
        <p className="parking__content">
          Оставляйте машину на платных городских парковках и разрешенных местах,
          не нарушая ПДД, а также в аэропортах.
        </p>
        <Link className="btn-booking" to={"/order"}>
          Забронировать
        </Link>
      </div>
      <div className="parking__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Parking;
