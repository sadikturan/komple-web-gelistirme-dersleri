import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
