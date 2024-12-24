import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishReducer from "./slices/wishSlice";
import { loadFromStorage, saveToLocalStorage } from "./slices/storageSlice";

const preloadedState = {
  cart: loadFromStorage("cart") || [],
  wish: loadFromStorage("wish") || [],
};

console.log("Preloaded state:", preloadedState);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wish: wishReducer,
  },
  preloadedState, // Correct key name
});

let isInitialRender = true;

store.subscribe(() => {
  if (isInitialRender) {
    isInitialRender = false;
    return; // Skip the initial save
  }

  const state = store.getState();
  console.log("Current state in subscribe:", state); // Debug log
  saveToLocalStorage("wish", state.wish);
  saveToLocalStorage("cart", state.cart);
});
