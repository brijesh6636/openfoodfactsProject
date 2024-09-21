import { createSlice } from "@reduxjs/toolkit";

// Safely retrieve and parse the cart from localStorage
const cartData = localStorage.getItem("cart");
const initialCartItems = cartData ? JSON.parse(cartData) : []; 

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: initialCartItems,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(cartItem => {
        return cartItem.card.info.id !== action.payload.items.card.info.id;
      });
      localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
    },
    clearItem: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify([])); // Clear localStorage
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
