import React, { useState } from "react";
import { ReactComponent as MenuBtn } from "../../images/menu_btn.svg";
import "./SideBar.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="side-bar">
      <div className="side-bar_open">
        <div className="option-menu"></div>
      </div>
      <div className="side-bar_close">
        <div className="side-bar__menu-btn">
          <MenuBtn onClick={openMenu} />
        </div>
        <div className="side-bar__switch-lang">
          <span>Eng</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
