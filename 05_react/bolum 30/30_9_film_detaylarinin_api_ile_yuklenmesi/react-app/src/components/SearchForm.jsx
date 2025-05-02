export default function SearchForm({ searchQuery, setSearchQuery }) {
  return (
    <form className="d-flex mb-2 mb-lg-0 ms-auto">
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
