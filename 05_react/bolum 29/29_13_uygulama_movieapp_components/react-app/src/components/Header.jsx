import Logo from "./Logo";
import SearchForm from "./SearchForm";
import WatchListButton from "./WatchListButton";

export default function Header() {
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Logo />
          <SearchForm />
          <WatchListButton />
        </div>
      </nav>
    </div>
  );
}
