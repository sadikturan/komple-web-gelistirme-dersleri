export default function WatchListButton({ movies, onSetIsWatchListOpen }) {
  return (
    <div className="mb-2 mb-lg-0 ms-1">
      <button
        onClick={() => onSetIsWatchListOpen((prevState) => !prevState)}
        type="button"
        className="btn btn-outline-light position-relative"
      >
        <i className="bi bi-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {movies.length}
        </span>
      </button>
    </div>
  );
}
