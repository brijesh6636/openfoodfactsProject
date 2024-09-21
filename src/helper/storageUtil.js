// storageUtil.js
export const saveToSession = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSession = (key) => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
};

export const clearSessionData = (key) => {
    sessionStorage.removeItem(key);
};

export const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
};