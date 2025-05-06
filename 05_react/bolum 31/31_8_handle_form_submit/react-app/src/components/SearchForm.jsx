import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery("");
    }
  }

  return (
    <form className="d-flex mb-2 mb-lg-0" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control me-1"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={`btn btn-${theme} border`} type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
