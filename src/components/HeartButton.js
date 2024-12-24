// HeartButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWish, deleteWish } from "../rtk/slices/wishSlice";
import "./CardShape.css"

const HeartButton = ({ product ,fontSize }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wish")) || [];
    setIsLiked(wishList.some((item) => item.id === product.id));
  }, [product.id]);

  const handleToggleHeart = () => {
    const wishList = JSON.parse(localStorage.getItem("wish")) || [];
    if (isLiked) {
      const updatedWishList = wishList.filter((item) => item.id !== product.id);
      localStorage.setItem("wish", JSON.stringify(updatedWishList));
      dispatch(deleteWish(product));
    } else {
      const updatedWishList = [...wishList, product];
      localStorage.setItem("wish", JSON.stringify(updatedWishList));
      dispatch(addWish(product));
    }
    setIsLiked(!isLiked);
  };

  return (
    <i
      onClick={handleToggleHeart}
      className={isLiked ? "bi bi-heart-fill red-heart" : "bi bi-heart"}
      style={{ cursor: "pointer" ,fontSize: fontSize}}
    ></i>
  );
};

export default HeartButton;
