import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        possimus neque non quam animi quisquam magnam reprehenderit ad ea quidem
        tempora odio earum et eveniet minima qui delectus, pariatur molestias!
      </p>
    </div>
  );
}

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

function Movie() {
  return (
    <div className="movie">
      <h3>Movie</h3>
      <p>Film açıklaması</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
