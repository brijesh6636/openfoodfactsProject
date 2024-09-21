import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 border border-gray-300 rounded-lg shadow-md bg-white text-black max-w-xs sm:max-w-none sm:w-full m-2 transition-transform duration-300 transform hover:scale-105">
      {/* Product Image */}
      <img
        src={item.image_url || 'https://world.openfoodfacts.org/images/icons/dist/packaging.svg'}
        alt="Product"
        className="w-20 h-20 object-contain rounded-lg mb-4 sm:mb-0 sm:mr-4"
      />
      
      {/* Product Name */}
      <div className="flex flex-col justify-between w-full">
        <h3 className="text-sm sm:text-lg font-semibold">{item.product_name}</h3>
        
        {/* View Details Link */}
        <Link
          to={`/product/${item.id}`}
          className="text-blue-500 text-xs sm:text-sm font-semibold mt-2 sm:mt-0 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
