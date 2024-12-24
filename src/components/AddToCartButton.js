// AddToCartButton.js
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart, deleteCart } from "../rtk/slices/cartSlice";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cartList.some((item) => item.id === product.id));
  }, [product.id]);

  const handleToggleCart = () => {
    const cartList = JSON.parse(localStorage.getItem("cart")) || [];
    if (inCart) {
      const updatedCartList = cartList.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      dispatch(deleteCart(product));
    } else {
      const updatedCartList = [...cartList, product];
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      dispatch(addCart(product));

    }
    setInCart(!inCart);
  };

  return (
    <Button className="mt-3" onClick={handleToggleCart} variant="primary">
      {inCart ? "Remove" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;
