import { Link } from 'react-router-dom'; // or next/link for Next.js

const ProductCard = ({ product }) => {
  if (!product) return null;
  let ingredientTags = product.ingredients_analysis_tags
 

  let cleanedTags = [];

  if (Array.isArray(ingredientTags)) {
    // If it's an array, process each tag
    cleanedTags = ingredientTags.map(tag =>
      typeof tag === 'string' ? tag.replace(/en:/g, '').trim() : null
    ).filter(tag => tag); // Filter out any null values
  } else if (typeof ingredientTags === 'string') {
    // If it's a single string, clean it
    cleanedTags = [ingredientTags.replace(/en:/g, '').trim()];
  }


  

  return (
    <div className="border overflow-hidden border-gray-300 w-72 p-4 m-4  rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
      <img
        src={product.image_url}
        alt={product.product_name}
        className="w-40 h-40 object-cover rounded-md mb-3 transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.product_name}</h3>
      <p className="text-sm text-gray-700 mb-1">Category: <span className="font-medium">{product.categories}</span></p>
      <p className="text-sm text-gray-700 mb-3">Ingredients: <span className="font-medium">{cleanedTags}</span></p>
      <p className="text-sm text-gray-700 mb-1">Nutrients grade: <span className="font-medium">{product.nutrition_grades.toUpperCase()}</span></p>
      <Link to={`/product/${product.id}`} className="mt-2 block text-blue-600 font-semibold transition duration-300 ease-in-out hover:text-blue-800 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
