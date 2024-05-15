import { useDispatch } from "react-redux";

import { React, useState } from 'react';
import { addProduct } from './ProductListSlice';

function AddProduct({ products }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    available: ""
  });

  function clickHandler(item) {
    const inputs = item.target.closest("section").querySelector("input");
    [...inputs].forEach((input) => (input.value = ""));
    dispatch(addProduct(product));
    setProduct(item.target.value);
  }

  function availabilityCheck(item) {
    item.target.value.trim() === "yes" || item.target.value.trim() === "no"
      ? setProduct({ ...product, available: item.target.value })
      : setProduct({ ...product, available: "no" });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px"
      }}
    >
      <h3>Add new product</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(item) => setProduct({ ...product, name: item.target.value })}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        onChange={(item) => setProduct({ ...product, description: item.target.value })}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="text"
        onChange={(item) => setProduct({ ...product, price: Number(item.target.value) })}
      />

      <label htmlFor="available">Available</label>
      <input
        id="available"
        type="text"
        onChange={(item) => availabilityCheck(item)}
      />

      <button onClick={(item) => clickHandler(item)}>
        Add new product
      </button>
    </div>
  );
}

export default AddProduct;