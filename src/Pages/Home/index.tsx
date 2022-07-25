import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <SideBar />
      <div className="page__main">
        <header className="page__header">
          <Header />
        </header>
        <div className="page__content">
          <div className="content__title">
            <h1>
              Каршеринг <br />
              <span>Need for drive</span>
            </h1>
          </div>
          <p>Поминутная аренда авто твоего города</p>
          <Link className="btn-booking" to={"/order"}>
            Забронировать
          </Link>
        </div>
        <footer className="page__footer">
          <Footer />
        </footer>
      </div>
      <Slider />
    </div>
  );
};

export default Home;
