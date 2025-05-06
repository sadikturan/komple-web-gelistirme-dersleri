import { useEffect, useState } from "react";
import Loading from "./Loading";

const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function MovieDetails({ movieObj, onClose }) {
  const [loadedMovie, setLoadedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieObj.id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();

        if (data) {
          setLoadedMovie(data);
        }
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    getMovieDetails();
  }, [movieObj.id]);

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
          <button className="btn btn-danger btn-sm" onClick={() => onClose()}>
            Kapat
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + movieObj.backdrop_path
              }
              alt=""
              className="img-fluid"
            />
            <h3>{movieObj.title}</h3>
            <p>{movieObj.overview}</p>
            <p>Release Date: {movieObj.release_date}</p>
            <p>Rating: {movieObj.vote_average}</p>
            {loading && <Loading />}
            {loadedMovie && (
              <>
                <p>Süre: {loadedMovie.runtime}</p>
                <p>Ülke: {loadedMovie.production_countries[0].name}</p>
                <p>Yapımcı: {loadedMovie.production_companies[0].name}</p>
                <p>Yönetmen: {loadedMovie.credits.crew[0].name}</p>
                <p>Senarist: {loadedMovie.credits.crew[1].name}</p>
                <p>Türler:</p>
                <ul className="list-unstyled d-flex flex-wrap">
                  {loadedMovie.genres.map((genre) => (
                    <li key={genre.id} className="badge bg-primary me-2 mb-2">
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <div className="card card-body">
                  <p>Oyuncular:</p>
                  <div className="row">
                    {loadedMovie.credits.cast.slice(0, 12).map((actor) => (
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
