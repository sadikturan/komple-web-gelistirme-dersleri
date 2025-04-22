import Logo from "./Logo";
import SearchForm from "./SearchForm";
import WatchListButton from "./WatchListButton";

export default function Header({ watchListMovies, onSetIsWatchListOpen }) {
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Logo />
          <SearchForm />
          <WatchListButton
            movies={watchListMovies}
            onSetIsWatchListOpen={onSetIsWatchListOpen}
          />
        </div>
      </nav>
    </div>
  );
}
