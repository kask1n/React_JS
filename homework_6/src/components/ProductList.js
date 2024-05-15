import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, changeAvailability } from './ProductListSlice';

import React from 'react';

function ProductList() {
  const products = useSelector((state) => state.productList.array);
  const dispatch = useDispatch();

  return (
    <>
      {products.map((product) => (
        <div key={product.id} style={{ display: "flex", gap: "20px" }}>

          <p>id: {product.id}</p>
          <p>name: {product.name}</p>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
          <p>available: {product.available ? "yes" : "no"}</p>

          <button
            onClick={() => dispatch(changeAvailability(product))}>
            Change availability
          </button>

          <button
            onClick={() => dispatch(deleteProduct(product))}>
            Delete product
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;
