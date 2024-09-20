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
    <div className="border overflow-hidden border-gray-300 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
    <img
        src={product.image_url || 'https://world.openfoodfacts.org/images/icons/dist/packaging.svg' }
        alt={'image not available'}
        className="w-full h-48 object-cover rounded-t-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
    />
    <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.product_name}</h3>
        <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium text-blue-600">Category:</span> {product.categories}
        </p>
        <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-blue-600">Ingredients:</span> {cleanedTags}
        </p>
        <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium text-blue-600">Nutrient Grade:</span> {product.nutrition_grades.toUpperCase()}
        </p>
        <Link to={`/product/${product.id}`} className="mt-2 block text-blue-600 font-semibold transition duration-300 ease-in-out hover:text-blue-800 hover:underline">
            View Details
        </Link>
    </div>
</div>

  );
};

export default ProductCard;
