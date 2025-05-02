import React from "react";
import { NavLink } from "react-router";
const MovieDetails = () => {
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
        <h1>Welcome to the Movie Details Page</h1>
        <p>This is the home page of your React application.</p>
      </div>
    </>
  );
};

export default MovieDetails;
