// src/components/ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const [sortKey, setSortKey] = useState('');

  const sortedProducts = sortKey ? [...products].filter(product => product.size === sortKey) : products;

  return (
    <div>
      <select onChange={(e) => setSortKey(e.target.value)}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <div className="product-list">
        {sortedProducts.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
