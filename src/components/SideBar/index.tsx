import React, { useState } from "react";
import { ReactComponent as MenuBtn } from "../../images/menu_btn.svg";
import { ReactComponent as MenuBtnClose } from "../../images/menu_btn-close.svg";
import { ReactComponent as Telegram } from "../../images/Telegram_white.svg";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen ? (
        <div className="side-bar_open">
          <div className="option-menu">
            <div className="option-menu__close-btn">
              <MenuBtnClose onClick={openMenu} />
            </div>
            <div className="option-menu__content">
              <div className="content">
                <Link to={"/parking"}>ПАРКОВКА</Link>
                <Link to={"/insurance"}>СТРАХОВКА</Link>
                <Link to={"/petrol"}>БЕНЗИН</Link>
                <Link to={"/service"}>ОБСЛУЖИВАНИЕ</Link>
              </div>
              <div className="socials">
                <Link className="socials__telegram" to={"/error"}>
                  <Telegram />
                </Link>
                <Link className="socials__facebook" to={"/error"}>
                  <Telegram />
                </Link>
                <Link className="socials__instagram" to={"/error"}>
                  <Telegram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="side-bar_close">
          <div className="content">
            <div className="content__menu-btn">
              <MenuBtn onClick={openMenu} />
            </div>
            <div className="content__switch-lang">
              <span>Eng</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
