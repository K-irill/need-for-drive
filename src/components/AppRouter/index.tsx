import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../../Pages/Page404";
import { publicRoutes } from "./router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      <Route path="*" element={<Page404 />} />;
    </Routes>
  );
};

export default AppRouter;
