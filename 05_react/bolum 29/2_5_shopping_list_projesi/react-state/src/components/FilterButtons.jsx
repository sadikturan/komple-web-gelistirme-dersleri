export default function FilterButtons() {
  return (
    <div className="filter-buttons border rounded p-3 mb-3">
      <button item-filter="all" className="btn btn-primary">
        All
      </button>
      <button item-filter="incomplete" className="btn btn-secondary">
        Incomplete
      </button>
      <button item-filter="completed" className="btn btn-secondary">
        Completed
      </button>
    </div>
  );
}
