import { createSlice } from '@reduxjs/toolkit';

export const ProductListSlice = createSlice({
  name: "productList",
  initialState: {
    array: [
      {
        id: 1,
        name: "Product One",
        description: "This is the Product One",
        price: 1111,
        available: "yes"
      },
      {
        id: 2,
        name: "Product Two",
        description: "This is the Product Two",
        price: 2222,
        available: "no"
      },
      {
        id: 3,
        name: "Product Three",
        description: "This is the Product Three",
        price: 3333,
        available: "yes"
      }
    ]
  },

  reducers: {
    addProduct: (state, { payload: newProduct }) => {
      if (state.array.some((item) => item.id === newProduct.id)) {
        return;
      }

      state.array.push({ ...newProduct, id: state.array.length + 1 });
    },

    deleteProduct: (state, { payload: deleteProduct }) => {
      state.array = state.array.filter(
        (item) => item.id !== deleteProduct.id
      );
    },

    changeAvailability: (state, { payload: editedProduct }) => {
      state.array.forEach((product) => {
        if (product.id === editedProduct.id) {
          product.available === "yes"
            ? (product.available = "no")
            : (product.available = "yes");
        }
      });
    },

    updateProduct: (state, { payload: updatedProduct }) => {
      state.array = state.array.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    }
  }
});

export const { addProduct, deleteProduct, changeAvailability, updateProduct } = ProductListSlice.actions;

export default ProductListSlice.reducer;
