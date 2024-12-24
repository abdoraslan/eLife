import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "creatSlice",
  reducers: {
    addCart: (state, action) => {
        const product = state.find((product)=>product.id === action.payload.id)
        if(!product){
          return [...state, { ...action.payload, quantity: 1 }];
        }
        return state
    },
    deleteCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity--;
      }
    },
  },
});

export const { addCart, deleteCart, increaseQuantity, decreaseQuantity,totalPrice} =
  cartSlice.actions;
export default cartSlice.reducer;
