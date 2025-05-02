import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import Main from "./components/Main";
import { movie_list } from "./data";

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [watchListMovies, setWatchListMovies] = useState(movie_list);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  return (
    <>
      <Header
        watchListMovies={watchListMovies}
        onSetIsWatchListOpen={setIsWatchListOpen}
      />
      <Main
        movies={movies}
        watchListMovies={watchListMovies}
        isWatchListOpen={isWatchListOpen}
      />
      <Footer />
    </>
  );
}
