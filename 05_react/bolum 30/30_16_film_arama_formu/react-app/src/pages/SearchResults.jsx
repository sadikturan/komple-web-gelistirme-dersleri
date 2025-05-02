import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const page = 1;
const language = "tr-TR";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovies();
  }, [query]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieList movies={movies} title={`Arama Sonuçları: ${query}`} />;
};

export default SearchResults;
