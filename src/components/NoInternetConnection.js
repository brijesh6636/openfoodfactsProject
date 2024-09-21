import React, { useEffect, useState } from 'react';

const NoInternetConnection = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    if (isOnline) return null; // Don't render if online

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">No Internet Connection</h1>
                <p className="text-lg text-gray-700 mb-6">Please check your internet connection and try again.</p>
                <img
                    src="https://img.icons8.com/ios-filled/100/ff4d4d/wifi-off.png" // Example icon
                    alt="No Internet"
                    className="mx-auto mb-4"
                />
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default NoInternetConnection;
