import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery("");
    }
  }

  return (
    <form className="d-flex mb-2 mb-lg-0 ms-auto" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control me-1"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-light" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
