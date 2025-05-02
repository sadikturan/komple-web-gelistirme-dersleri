import { useState } from "react";

export default function FilterButtons({ filterButton, setFilterButton }) {
  return (
    <div className="border rounded p-3 mb-3">
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
  );
}
