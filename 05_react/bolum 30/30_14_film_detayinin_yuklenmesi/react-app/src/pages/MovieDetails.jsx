import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const language = "tr-TR";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();
        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovie();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
              alt=""
              className="img-fluid"
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Süre: {movie.runtime}</p>
            <p>Ülke: {movie.production_countries[0].name}</p>
            <p>Yapımcı: {movie.production_companies[0].name}</p>
            <p>Yönetmen: {movie.credits.crew[0].name}</p>
            <p>Senarist: {movie.credits.crew[1].name}</p>
            <p>Türler:</p>
            <ul className="list-unstyled d-flex flex-wrap">
              {movie.genres.map((genre) => (
                <li key={genre.id} className="badge bg-primary me-2 mb-2">
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className="card card-body">
              <p>Oyuncular:</p>
              <div className="row">
                {movie.credits.cast.slice(0, 12).map((actor) => (
                  <div className="col-md-2" key={actor.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        actor.profile_path
                      }
                      alt={actor.name}
                      className="img-fluid"
                    />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
