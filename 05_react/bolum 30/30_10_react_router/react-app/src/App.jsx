import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> }, // "/"         => Home
  { path: "/movies", element: <Movies /> }, // "/movies"   => Movies
  { path: "/movies/1", element: <MovieDetails /> }, // "/movies/1" => MovieDetails
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
