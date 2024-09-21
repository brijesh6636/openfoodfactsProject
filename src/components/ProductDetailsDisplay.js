import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoProductFound, ShimmerLoader } from '../import';

const ProductDetailsDisplay = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);
                const data = await response.json();
                if (data.status === 1) {
                    setProduct(data.product);
                } else {
                    alert('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <ShimmerLoader/>; // You can replace this with a loader or a spinner
    }

    if (!product) {
        return <NoProductFound/>;
    }

    const handleAddToCart = () => {
        alert(`${product.product_name} added to cart!`);
        // Logic to add product to cart can be implemented here
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Image Section */}
                <div className="flex justify-center  items-center">
                    <img 
                        src={product.image_url || 'https://world.openfoodfacts.org/images/icons/dist/packaging.svg'}
                        alt={product.product_name}
                        className="w-[200px] md:max-w-md object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Right: Product Details Section */}
                <div className="p-6">
                    <h2 className="text-3xl font-extrabold text-blue-800 mb-4">{product.product_name}</h2>
                    
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Ingredients:</h3>
                    <p className="text-gray-700 mb-4">{product.ingredients_text || 'Ingredients not available.'}</p>

                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Nutritional Values:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        {product.nutriments && (
                            <>
                                <li>Energy: {product.nutriments['energy-kcal'] || 'N/A'} kcal</li>
                                <li>Fat: {product.nutriments.fat || 'N/A'} g</li>
                                <li>Carbohydrates: {product.nutriments.carbohydrates || 'N/A'} g</li>
                                <li>Proteins: {product.nutriments.proteins || 'N/A'} g</li>
                            </>
                        )}
                    </ul>

                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Labels:</h3>
                    <div className="flex flex-wrap mb-6">
                        {product.labels ? (
                            product.labels.split(',').map((label, index) => (
                                <span key={index} className="bg-green-100 text-green-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
                                    {label}
                                </span>
                            ))
                        ) : (
                            <p className="text-gray-600">No labels available.</p>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex justify-start">
                        <button 
                            onClick={handleAddToCart}
                            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transform hover:scale-105 active:scale-95"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsDisplay;
