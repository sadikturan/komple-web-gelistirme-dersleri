export default function FilterButtons({
  filterButton,
  setFilterButton,
  onClearItems,
}) {
  return (
    <div className="border rounded p-3 mb-3 d-flex justify-content-between">
      <div>
        <button
          className={`btn me-1 ${
            filterButton == "all" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("all")}
        >
          All
        </button>
        <button
          className={`btn me-1 ${
            filterButton == "incomplete" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("incomplete")}
        >
          Incomplete
        </button>
        <button
          className={`btn me-1 ${
            filterButton == "completed" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButton("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn btn-danger clear" onClick={onClearItems}>
        Clear
      </button>
    </div>
  );
}
