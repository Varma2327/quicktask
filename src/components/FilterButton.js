import React from "react";

function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={{ marginBottom: "1rem" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{ fontWeight: filter === f ? "bold" : "normal", marginRight: "10px" }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
