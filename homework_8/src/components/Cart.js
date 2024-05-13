// src/components/Cart.js
import React, { useState } from 'react';

const Cart = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (id, quantity) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setItems(newItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} x
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              min="0"
            /> = ${item.price * item.quantity}
          </p>
        </div>
      ))}
      <h2>GRAND TOTAL: ${getTotalPrice()}</h2>
    </div>
  );
};

export default Cart;
