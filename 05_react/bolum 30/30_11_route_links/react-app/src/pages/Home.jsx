import React from "react";
import { NavLink } from "react-router";

const Home = () => {
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
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your React application.</p>
      </div>
    </>
  );
};

export default Home;
