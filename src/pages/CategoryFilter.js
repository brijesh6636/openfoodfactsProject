import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ handleCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://world.openfoodfacts.org/categories.json');
        const data = await response.json();
        setCategories(data.tags);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <select onChange={(e) => handleCategoryChange(e.target.value)} className="p-2 m-2 border border-black rounded-lg shadow-lg">
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
