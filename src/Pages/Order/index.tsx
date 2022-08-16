import React from "react";
import "./Order.scss";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import NavigationFrom from "../../components/NavigationForm";

const Order = () => {
  return (
    <div className="order">
      <div className="order__side-bar">
        <SideBar />
      </div>
      <div className="order__content">
        <div className="content-header">
          <Header />
        </div>
        <NavigationFrom />
      </div>
    </div>
  );
};

export default Order;
