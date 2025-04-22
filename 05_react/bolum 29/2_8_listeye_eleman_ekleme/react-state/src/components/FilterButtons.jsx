export default function FilterButtons() {
  return (
    <div className="filter-buttons border rounded p-3 mb-3">
      <button item-filter="all" className="btn btn-primary me-1">
        All
      </button>
      <button item-filter="incomplete" className="btn btn-secondary me-1">
        Incomplete
      </button>
      <button item-filter="completed" className="btn btn-secondary">
        Completed
      </button>
    </div>
  );
}
