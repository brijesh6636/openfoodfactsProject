import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  // Clean up ingredient tags by removing 'en:' prefix and trimming spaces
  let ingredientTags = product.ingredients_analysis_tags || [];
  let cleanedTags = [];

  if (Array.isArray(ingredientTags)) {
    cleanedTags = ingredientTags
      .map(tag => (typeof tag === 'string' ? tag.replace(/en:/g, '').trim() : null))
      .filter(tag => tag);
  } else if (typeof ingredientTags === 'string') {
    cleanedTags = [ingredientTags.replace(/en:/g, '').trim()];
  }

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer overflow-hidden border border-gray-300 hover:border-blue-600 bg-black text-white
         max-sm:w-[150px]  md:w-1/4 lg:w-1/4 xl:w-1/5 p-4 m-2 max-lg:m-[5px] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-defined hover:shadow-xl "
    >
      {/* Product Image */}
      <img
        src={product.image_url || 'https://world.openfoodfacts.org/images/icons/dist/packaging.svg'}
        alt={product.product_name}
        className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-contain rounded-t-lg rounded-2xl bg-white  mb-4 transition-transform duration-300 transform hover:scale-110"
      />

      {/* Product Information */}
      <div className="p-2">
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{product.product_name}</h3>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 max-lg:hidden">
          <span className="font-medium text-blue-400">Category:</span> {product.categories || 'N/A'}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 max-lg:hidden">
          <span className="font-medium text-blue-400 max-lg:hidden">Ingredients:</span> {cleanedTags.join(', ') || 'N/A'}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 max-lg:hidden">
          <span className="font-medium text-blue-400">Nutrient Grade:</span> {product.nutrition_grades?.toUpperCase() || 'N/A'}
        </p>

        {/* View Details Link */}
        <Link
          to={`/product/${product.id}`}
          className="mt-2 block text-blue-400 font-semibold transition duration-300 ease-in-out hover:text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
