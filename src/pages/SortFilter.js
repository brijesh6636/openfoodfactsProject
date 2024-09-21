import React from 'react';

const SortFilter = ({ handleSortChange }) => {
  return (
    <select onChange={(e) => handleSortChange(e.target.value)} className="p-2 m-2 border border-black rounded-lg shadow-lg max-lg:hidden">
      <option value="">Sort By</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="grade-asc">Nutrition Grade (Low to High)</option>
      <option value="grade-desc">Nutrition Grade (High to Low)</option>
    </select>
  );
};

export default SortFilter;
