// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image || "placeholder.png"} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Size: {product.size}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
