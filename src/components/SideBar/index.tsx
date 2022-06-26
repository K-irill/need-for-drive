import React from "react";
import { ReactComponent as MenuBtn } from "../../images/menu_btn.svg";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__menu-btn">
        <MenuBtn />
      </div>
      <div className="side-bar__switch-lang">
        <span>Eng</span>
      </div>
    </div>
  );
};

export default SideBar;
