import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

import { movie_list } from "./data";

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((movies) => [...movies, movie]);
    }
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
        <WatchList movies={watchListMovies} isWatchListOpen={isWatchListOpen} />
        <MovieList movies={movies} onAddToList={handleAddToWatchList} />
      </Main>
      <Footer />
    </>
  );
}
