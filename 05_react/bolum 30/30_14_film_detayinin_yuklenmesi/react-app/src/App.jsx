import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movies/:id", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
