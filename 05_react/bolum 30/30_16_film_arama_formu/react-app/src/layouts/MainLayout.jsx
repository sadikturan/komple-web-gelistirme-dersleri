import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
