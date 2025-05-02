import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/Logo";
import Loading from "./components/Loading";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`
      );

      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    }

    getMovies();
  }, []);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((movies) => movies.filter((i) => i.id !== movie.id));
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>

      <Main>
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />

        {loading ? (
          <Loading />
        ) : (
          <MovieList movies={movies} onAddToList={handleAddToWatchList} />
        )}
      </Main>
      <Footer />
    </>
  );
}
