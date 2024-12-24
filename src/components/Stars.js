import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Icons for full, half, and empty stars
import "./Stars.css"

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];
  
  // Loop through the total number of stars
  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      // Full Star
      stars.push(<FaStar key={i} color="gold" />);
    } else if (rating > i - 1 && rating < i) {
      // Half Star
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      // Empty Star
      stars.push(<FaRegStar key={i} color="gold" />);
    }
  }

  return <div style={{ display: "flex", gap: "5px" }}>{stars}</div>;
};

export default StarRating;
