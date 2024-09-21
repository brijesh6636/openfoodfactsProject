// ShimmerLoader.js
import React from 'react';

const ShimmerLoader = () => {
    return (
        <div className="max-w-xs mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg mt-10">
            <div className="animate-pulse flex flex-col">
                <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="flex flex-wrap">
                    <div className="h-6 bg-gray-300 rounded-full mr-2 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded-full mr-2 mb-2"></div>
                </div>
            </div>
        </div>
    );
};

const NoProductFound = () => (
    <div className="max-w-xs mx-auto p-6 bg-red-100 rounded-lg shadow-lg mt-10">
        <h2 className="text-lg font-bold text-red-800">No Product Found</h2>
        <p className="text-gray-700">We couldn't find the product you're looking for.</p>
    </div>
);

export { ShimmerLoader, NoProductFound };
