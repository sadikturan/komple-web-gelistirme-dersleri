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
  const imageUrl = "1.jpg";
  const baslik = "Kaptan Amerika";
  const aciklama = "Güzel bir film";

  const movieObj = {
    image: "1.jpg",
    title: "Kaptan Amerika",
    description: "Güzel bir film",
  };

  return (
    <div className="movie">
      <img src={"/img/" + movieObj.image} alt="" />
      <h3>{movieObj.title}</h3>
      <p>{movieObj.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
