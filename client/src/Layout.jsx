import React from "react";
import HeaderPage from "./pages/HeaderPage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="p-4 flex flex-col min-h-screen ">
        <HeaderPage />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
