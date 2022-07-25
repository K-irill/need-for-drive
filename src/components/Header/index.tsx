import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LabelCity } from "../../images/label_city.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header__name-company">
        Need for drive
      </Link>
      <div className="header__city">
        <LabelCity />
        <span>Ульяновск</span>
      </div>
    </div>
  );
};

export default Header;
