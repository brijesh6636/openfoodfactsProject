# Food Product Explorer

This is a web application built using ReactJS that allows users to search, filter, and explore detailed information about food products using the OpenFoodFacts API. The project aims to provide an interactive and responsive UI with a variety of features such as product search, sorting, filtering by category, and more. It includes features like local storage for cart persistence, session management to optimize API calls, and graceful error handling.

## Features

### 1. **Homepage:**
   - Displays a list of food products fetched from the OpenFoodFacts API.
   - Each product shows essential details: product name, image, category, ingredients, and nutrition grade (A-E).
   - Pagination is handled via infinite scroll or load more functionality.

### 2. **Search Functionality:**
   - **Name Search**: Users can search products by name using a search bar with debouncing to reduce unnecessary API calls.
   - **Barcode Search**: Users can also search for products by their barcode.

### 3. **Category Filter:**
   - Users can filter products by categories (e.g., beverages, dairy, snacks).
   - Categories are dynamically fetched from the OpenFoodFacts API and displayed as a dropdown or side filter.

### 4. **Sort Functionality:**
   - Users can sort products by:
     - **Product Name**: A-Z or Z-A.
     - **Nutrition Grade**: Ascending/Descending.

### 5. **Product Detail Page:**
   - On clicking a product, users are redirected to a detailed product page displaying:
     - Product image
     - Full list of ingredients
     - Nutritional values (energy, fat, carbs, proteins)
     - Labels like vegan, gluten-free, etc.

### 6. **Cart:**
   - Users can add products to the cart.
   - Cart data persists even after reloads, thanks to local storage.

### 7. **Session-based Data Fetching:**
   - API calls are optimized within a session to avoid redundant API requests, using Redux and local storage.

### 8. **Loading States:**
   - A shimmer effect is displayed while product data is being fetched to improve user experience.

### 9. **Error Handling:**
   - Includes an `error.js` component to handle invalid paths.
   - A global error boundary is in place to catch any unforeseen errors in the app and display user-friendly messages.

### 10. **Offline Handling:**
   - A component to notify the user when the internet connection is lost.

### 11. **Responsive Design:**
   - The application is fully responsive, ensuring it works seamlessly across devices like mobile, tablet, and desktop.

## Technologies Used
- **Frontend**: ReactJS, Redux
- **Styling**: TailwindCSS, CSS
- **Routing**: `react-router-dom`
- **State Management**: Redux for global state management and local storage for cart persistence.
- **API**: OpenFoodFacts API for fetching food product data.
- **Error Handling**: Custom error boundaries and components.

## Setup Instructions

### 1. Clone the repository:

```bash
git clone <https://github.com/bsingh6636/openfoodfactsProject.git>
cd openfoodfactsProject
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm start
```

### 4. Build for production:

```bash
npm run build
```

## Additional Features

- **Debouncing for Search**: The search functionality is optimized using debouncing to minimize the number of API requests.
- **Cart Persistence**: Cart data is stored in local storage, ensuring that items remain in the cart even after a page refresh.
- **Session-based API Calls**: Data fetched during a session is cached, so subsequent requests within the same session won't trigger additional API calls.
- **Offline Handling**: Displays a message when the internet connection is lost, improving the user experience during outages.

## Error Handling
- **Invalid Path Handling**: If a user navigates to a wrong URL, an error page is shown (`error.js`).
- **Global Error Boundary**: Catches unexpected errors across the app and shows a fallback UI.

## Time Taken

Please mention the time taken to complete the project in this section after completing the assignment.

## Improvements and Future Enhancements
- Potential improvements could be made in areas such as performance optimization, UI enhancements, or adding more advanced sorting/filtering criteria.

---
