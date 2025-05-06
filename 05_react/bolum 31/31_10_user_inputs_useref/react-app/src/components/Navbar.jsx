import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { watchList } = useContext(UserContext);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${theme} border-bottom border-body`}
      data-bs-theme={theme}
    >
      <ThemeSelector />

      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
          <SearchForm />
          <Link
            to="/watchlist"
            className={`btn btn-${theme} border position-relative ms-1`}
          >
            <i className="bi bi-heart-fill"></i>
            <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger translate-middle">
              {watchList.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
