import Home from "../../Pages/Home";
import Parking from "../../Pages/Parking";
import Insurance from "../../Pages/Insurance";
import Petrol from "../../Pages/Petrol";
import Service from "../../Pages/Service";
import Page404 from "../../Pages/Page404";
import Order from "../../Pages/Order";

export const publicRoutes = [
  {
    path: "/",
    Element: <Home />,
  },
  {
    path: "/parking",
    Element: <Parking />,
  },
  {
    path: "/insurance",
    Element: <Insurance />,
  },
  {
    path: "/petrol",
    Element: <Petrol />,
  },
  {
    path: "/service",
    Element: <Service />,
  },
  {
    path: "/order",
    Element: <Order />,
  },
  {
    path: "/error",
    Element: <Page404 />,
  },
];
