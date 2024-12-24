import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await axios.get(
      "https://protective-joyous-spider.glitch.me/products"
    );
    const data = await res.data;
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    toggleHeart: (state, action) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.isLiked = !product.isLiked; // Directly modify state
      }
    },
    toggleCart: (state, action) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.inCart = !product.inCart; // Directly modify state
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const updatedProducts = action.payload.map((product) => ({
        ...product,
        isLiked: false,
        inCart: false,
      }));
      return updatedProducts;
    });
  },
});
export const { toggleCart, toggleHeart } = productsSlice.actions;
export default productsSlice.reducer;
