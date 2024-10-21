// Filters.jsx
import React, { useState } from 'react';
import './Filters.scss'; // import the SCSS file

function Filters() {
  const [filters, setFilters] = useState(["It & Software", "Pakistan"]);

  const clearFilters = () => {
    setFilters([]);
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter(f => f !== filter));
  };

  return (
    <div className="filters-container">
      <button className="clear-button" onClick={clearFilters}>
        Clear all filters
      </button>
      <div className="filters-tags">
        {filters.map((filter, index) => (
          <div key={index} className="filter-tag">
            {filter}
            <span className="remove" onClick={() => removeFilter(filter)}>✕</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
