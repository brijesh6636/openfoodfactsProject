import React, { useState } from 'react';

const BarcodeSearch = ({ handleBarCodeResult }) => {
    const [barcode, setBarcode] = useState('');

    const handleInputChange = (e) => {
        setBarcode(e.target.value);
    };

    const handleSearch = async () => {
        const product = await fetchProductByBarcode(barcode);
        if (product) handleBarCodeResult(product);
    };

    const fetchProductByBarcode = async (barcode) => {
        try {
            const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            const data = await response.json();
            if (data.status_verbose === 'product found') {
                return data.product;
            } else {
                alert('Product not found');
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    return (
        <div>
            <input
                className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg max-lg:hidden'
                type="text"
                value={barcode}
                onChange={handleInputChange}
                placeholder="Enter barcode"
            />
            <button
                className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg bg-gray-500 hover:bg-gray-800 hover:text-white'
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default BarcodeSearch;
