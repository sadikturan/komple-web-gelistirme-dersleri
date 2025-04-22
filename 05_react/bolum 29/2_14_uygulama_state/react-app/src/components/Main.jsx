import MovieList from "./MovieList";
import WatchList from "./WatchList";

export default function Main({ movies, watchListMovies, isWatchListOpen }) {
  return (
    <main>
      <WatchList movies={watchListMovies} isWatchListOpen={isWatchListOpen} />
      <MovieList movies={movies} />
    </main>
  );
}
