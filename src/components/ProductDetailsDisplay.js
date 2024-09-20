import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        return <div>Loading...</div>; // You can replace this with a loader or a spinner
    }

    if (!product) {
        return <div>No product found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 transition duration-300 ease-in-out transform hover:scale-105">
            <img
                src={product.image_url || 'https://world.openfoodfacts.org/images/icons/dist/packaging.svg'}
                alt={product.product_name}
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.product_name}</h2>
            <h3 className="text-lg font-semibold text-gray-600 mb-1">Ingredients:</h3>
            <p className="text-gray-700 mb-4">{product.ingredients_text || 'Ingredients not available.'}</p>

            <h3 className="text-lg font-semibold text-gray-600 mb-1">Nutritional Values:</h3>
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

            <h3 className="text-lg font-semibold text-gray-600 mb-1">Labels:</h3>
            <div className="flex flex-wrap mb-4">
                {/* {product.labels ? (
                    product.labels.map((label, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md">
                            {label}
                        </span>
                    ))
                ) : (
                    <p>No labels available.</p>
                )} */}
            </div>
        </div>
    );
};

export default ProductDetailsDisplay;
