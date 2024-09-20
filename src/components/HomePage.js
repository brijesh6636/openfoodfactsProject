import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { BarcodeSearch, Shimmer } from '../import'


const HomePage = () => {
    const [allProducts, setAllProducts] = useState()
    const [pageNumber, setPageNumber] = useState(1)
    const [searchQuery, setSearchQuery] = useState()

    async function handleQuery() {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchQuery}&json=true `)
        const data = await response.json()
        setAllProducts(data.products)
    }

    useEffect(() => {
        if (searchQuery && searchQuery.length > 2) handleQuery();
    }, [searchQuery])


    async function fetchProducts() {
        // const response = await fetch('https://world.openfoodfacts.org/products.json')
        const response = await fetch(`https://world.openfoodfacts.org/products.json?lang=en&sort=popularity&page=${pageNumber}`)
        const data = await response.json()
        setAllProducts(data.products)
    }
    useEffect(() => {
        fetchProducts()
    }, [pageNumber])

    function handleBarCodeResult(data) {
        console.log(data)
        setAllProducts(data)
    }

    console.log(typeof (allProducts))

    return (
        <>
            <div className='flex flex-wrap'>
                <input type='text' onChange={(e) => setSearchQuery(e.target.value)} className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg' />
                <BarcodeSearch handleBarCodeResult={handleBarCodeResult} />
            </div>
            <div className='flex flex-wrap'>
                {!allProducts ? (
                    <Shimmer />
                ) : Array.isArray(allProducts) ? (
                    allProducts.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <ProductCard key={allProducts.id} product={allProducts} /> // Handle single product case
                )}
            </div>

        </>

    )
}

export default HomePage