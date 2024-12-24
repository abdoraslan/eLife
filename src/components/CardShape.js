// CardShape.js
import React from "react";
import "./CardShape.css";
import { Card } from "react-bootstrap";
import StarRating from "./Stars";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton"; // Import the AddToCartButton component
import HeartButton from "./HeartButton"; // Import the HeartButton component

const CardShape = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className="card-product shadow-sm">
      <div className="product-image">
        <Card.Img variant="top" src={product.image} />
        <div style={{ cursor: "pointer" }} className="heart">
          <HeartButton fontSize={"19px"} product={product} /> {/* Use the HeartButton here */}
        </div>
      </div>
      <Card.Body style={{ height: "150px" }}>
        <Card.Title
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Card.Title>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Card.Text className="m-0">${product.price}</Card.Text>
          <StarRating rating={product.rating} />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <AddToCartButton product={product} /> {/* Use the AddToCartButton here */}
          <i
            onClick={() => {
              navigate("/product", { state: product });
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
            className="bi bi-info-circle mt-3 fs-4"
          ></i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardShape;
