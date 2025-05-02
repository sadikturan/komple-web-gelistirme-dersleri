import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies" end>
          Movies
        </NavLink>
        <NavLink to="/movies/1" end>
          Movie Details
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
