import React from "react";

function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-buttons">
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
