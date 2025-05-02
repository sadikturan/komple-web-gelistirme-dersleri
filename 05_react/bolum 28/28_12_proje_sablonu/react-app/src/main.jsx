import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

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
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Movie App
          </a>
        </div>
      </nav>
    </div>
  );
}

function MovieList() {
  const movie_list = [
    {
      id: 1,
      image: "1.jpg",
      title: "Kaptan Amerika",
      description: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
    {
      id: 3,
      image: "3.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
      is_active: true,
      is_new: false,
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
  ];

  return (
    <div className="container">
      <h2 className="title">Movie List</h2>

      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <div>Film bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
        >
          {movie_list.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie position-relative">
          <img src={"/img/" + movieObj.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h2 className="h5 card-title">{movieObj.title}</h2>
            <p className="card-text mb-0">{movieObj.description}</p>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
