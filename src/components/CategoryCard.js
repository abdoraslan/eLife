import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./CategoryCard.css";
import Title from "./Title";

const CategoryCard = ({image,title,subtitle,description}) => {
  return (
    <Container>
      <Card className="w-100 custom-card shadow-sm border-0 rounded">
        {/* Left Side with Vibrating Image */}
        <div className="card-left d-flex justify-content-center align-items-center">
          <img src={image} alt="categoryImage" className="vibrating-image" />
        </div>

        {/* Right Side with Content */}
        <div className="card-right d-flex flex-column align-content-center justify-content-center">
          <Title title={title} />
          <h1>{subtitle}</h1>
          <p>
           {description}
          </p>
          <Button variant="primary">Shop Now</Button>
        </div>
      </Card>
    </Container>
  );
};

export default CategoryCard;
