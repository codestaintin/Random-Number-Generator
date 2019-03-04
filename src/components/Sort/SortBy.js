import React from 'react';


const SortBy = () => (
  <div className="sortBy">
    <span>Sort By</span>
    <select>
      <option value="asc">Ascending Order</option>
      <option value="desc">Descending Order</option>
    </select>
  </div>
);

export default SortBy;