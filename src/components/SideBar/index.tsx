import React, { useState } from "react";
import { ReactComponent as MenuBtn } from "../../images/menu_btn.svg";
import { ReactComponent as MenuBtnClose } from "../../images/menu_btn-close.svg";
import { ReactComponent as Telegram } from "../../images/Telegram_white.svg";
import "./SideBar.scss";

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
                <span>ПАРКОВКА</span>
                <span>СТРАХОВКА</span>
                <span>БЕНЗИН</span>
                <span>ОБСЛУЖИВАНИЕ</span>
              </div>
              <div className="option-menu__socials">
                <div className="socials_telegram">
                  <Telegram />
                </div>
                <div className="socials_facebook">
                  <Telegram />
                </div>
                <div className="socials_instagram">
                  <Telegram />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="side-bar">
          <div className="side-bar_close">
            <div className="side-bar__menu-btn">
              <MenuBtn onClick={openMenu} />
            </div>
            <div className="side-bar__switch-lang">
              <span>Eng</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
