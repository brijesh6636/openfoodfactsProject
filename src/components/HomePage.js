import React, { useEffect, useState, useCallback } from 'react';
import { BarcodeSearch, Shimmer, ProductCard, CategoryFilter, SortFilter } from '../import';

const HomePage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    console.log(navigator.onLine)

    // Fetch products based on the current category and sort options
    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            let url = `https://world.openfoodfacts.org/products.json?lang=en&sort=popularity&page=${pageNumber}`;
            if (category) {
                url = `https://world.openfoodfacts.org/category/${category}.json`;
            }
            const response = await fetch(url);
            const data = await response.json();

            let products = data.products;

            // Apply sorting locally if needed
            if (sortOption) {
                if (sortOption === 'name-asc') {
                    products.sort((a, b) => a.product_name.localeCompare(b.product_name));
                } else if (sortOption === 'name-desc') {
                    products.sort((a, b) => b.product_name.localeCompare(a.product_name));
                } else if (sortOption === 'grade-asc') {
                    products.sort((a, b) => (a.nutrition_grades || 'z').localeCompare(b.nutrition_grades || 'z'));
                } else if (sortOption === 'grade-desc') {
                    products.sort((a, b) => (b.nutrition_grades || 'z').localeCompare(a.nutrition_grades || 'z'));
                }
            }

            setAllProducts(prevProducts => [...prevProducts, ...products]); // Append new products to the existing list
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setIsLoading(false);
    }, [category, sortOption, pageNumber]);

    // Fetch products initially and on category/sort/page change
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

    // Handle category change
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setAllProducts([]); // Clear current products to load new ones based on the selected category
        setPageNumber(1); // Reset page number
    };

    // Handle sort change
    const handleSortChange = (selectedSort) => {
        setSortOption(selectedSort);
        setAllProducts([]); // Clear current products to apply sorting
        setPageNumber(1); // Reset page number
    };

    return (
        <>
            <div className="flex flex-wrap justify-between p-4 max-sm:p-1 max-md:p-2 max-md:w-1/3">
                <input
                    placeholder="Search products"
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 p-2 m-2 border border-black rounded-lg shadow-lg"
                />
                <BarcodeSearch handleBarCodeResult={handleBarCodeResult} />
                <CategoryFilter handleCategoryChange={handleCategoryChange} />
                <SortFilter handleSortChange={handleSortChange} />
            </div>

            {!allProducts.length ? (
                <Shimmer />
            ) : (
                <div className="flex flex-wrap justify-between  ">
                    {allProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}

            {isLoading && <Shimmer />} {/* Display loading shimmer when fetching new products */}
        </>
    );
};

export default HomePage;

