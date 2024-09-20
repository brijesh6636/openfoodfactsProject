import React, { useEffect, useState } from 'react';

const BarcodeSearch = ({ handleBarCodeResult }) => {
    const [barcode, setBarcode] = useState('');
    const [data, setData] = useState()

    const handleInputChange = (e) => {
        setBarcode(e.target.value);
    };

    const handleSearch = async () => {
        const data = await fetchProductByBarcode(barcode);
        console.log(data);
        console.log(typeof(data))
        if (data) handleBarCodeResult(data);
    };

    const fetchProductByBarcode = async (barcode) => {
        try {
            const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            const data = await response.json();
            if (data.status_verbose == 'product found') {
                setData(data.product);
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
                className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg'
                type="text"
                value={barcode}
                onChange={handleInputChange}
                placeholder="Enter barcode"
            />
            <button className='h-10 p-2 m-2 border border-black rounded-lg shadow-lg hover:bg-gray-400' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default BarcodeSearch;
