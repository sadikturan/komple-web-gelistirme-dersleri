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
  const movie_list = [
    {
      image: "1.jpg",
      title: "Kaptan Amerika",
      description: "Güzel bir film",
    },
    {
      image: "2.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
    },
    {
      image: "3.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
    },
  ];

  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie
          image={movie_list[0].image}
          title={movie_list[0].title}
          description={movie_list[0].description}
        />
        <Movie
          image={movie_list[1].image}
          title={movie_list[1].title}
          description={movie_list[1].description}
        />
        <Movie
          image={movie_list[2].image}
          title={movie_list[2].title}
          description={movie_list[2].description}
        />
      </div>
    </div>
  );
}

function Movie(props) {
  console.log(props);

  return (
    <div className="movie">
      <img src={"/img/" + props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
