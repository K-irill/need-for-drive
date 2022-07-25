import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Page404.scss";

const Page404 = () => {
  return (
    <div className="page-error">
      <div className="page-error__header">
        <Header />
      </div>
      <div className="page-error__main">
        <h1 className="page-error__title">Страница не найдена</h1>
        <p className="page-error__content">
          Пожалуйста вернитесь на <Link to={"/"}>главную страницу</Link>
        </p>
      </div>
      <div className="page-error__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Page404;
