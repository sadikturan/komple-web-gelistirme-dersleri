import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
  return (
    <>
      <Navbar />
      <main className={color}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
