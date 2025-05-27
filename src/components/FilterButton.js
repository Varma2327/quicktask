import React from "react";

function FilterButtons({ filter, setFilter }) {

  return (
  <div className="filter-buttons">
  {["All", "Active", "Completed"].map((f) => (
    <button
      key={f}
      onClick={() => setFilter(f)}
      className={filter === f ? "active" : ""}
    >
      {f}
    </button>
  ))}
</div>

  );
}

export default FilterButtons;
