import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import { updateProduct } from './ProductListSlice';

function EditProductForm() {
  const products = useSelector((state) => state.products.array);
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
    dispatch(updateProduct(product));
  }

  function availabilityCheck(item) {
    item.target.value.trim() === "yes" || item.target.value.trim() === "no"
      ? setProduct({ ...product, available: item.target.value })
      : setProduct({ ...product, available: "no" });
  }

  function checkID(item) {
    if (!products.some((product) => product.id === Number(item.target.value))) {
      return;
    }

    setProduct({ ...product, id: Number(item.target.value) });
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
      <h3>Edit Product</h3>

      <label htmlFor="id">ID</label>
      <input
        id="id"
        type="text"
        onChange={(item) => checkID(item)}
      />

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
        Edit product
      </button>
    </div>
  );
}

export default EditProductForm()