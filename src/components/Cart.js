import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../import';


const Cart = () => {
  const cartItems = useSelector((store) => store.Cart.items);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} /> // Render each CartItem
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
