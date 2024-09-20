import React, { useEffect, useState, useCallback } from 'react'
import ProductCard from './ProductCard'
import { BarcodeSearch, Shimmer } from '../import'

const HomePage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch products based on the current page number
    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://world.openfoodfacts.org/products.json?lang=en&sort=popularity&page=${pageNumber}`);
            const data = await response.json();
            setAllProducts(prevProducts => [...prevProducts, ...data.products]); // Append new products to the existing list
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setIsLoading(false);
    }, [pageNumber]);

    // Fetch products initially and on page change
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Handle search query
    useEffect(() => {
        if (searchQuery && searchQuery.length > 2) {
            async function handleQuery() {
                const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchQuery}&json=true`);
                const data = await response.json();
                setAllProducts(data.products);
            }
            handleQuery();
        }
    }, [searchQuery]);

    // Infinite scroll handler
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 20 >= document.documentElement.scrollHeight && !isLoading) {
            setPageNumber(prevPageNumber => prevPageNumber + 1); // Increase page number to load next set of products
        }
    }, [isLoading]);

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    }, [handleScroll]);

    // Handle barcode result
    function handleBarCodeResult(data) {
        setAllProducts(data);
    }

    return (
        <>
            <div className='flex flex-wrap'>
                <input
                    placeholder='Search products'
                    type='text'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg'
                />
                <BarcodeSearch handleBarCodeResult={handleBarCodeResult} />
            </div>

           {!allProducts.length ? (
                <Shimmer />
            ) : (
                <div className='flex flex-wrap'>
                    {allProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}


            {isLoading && <Shimmer />} {/* Display loading shimmer when fetching new products */}
        </>
    );
};

export default HomePage;
