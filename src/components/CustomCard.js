import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";
import { Container } from "react-bootstrap";
import Image from "../eLife Images/product page/promotion products/top_image.png";

function CustomCard() {
  return (
    <Container className="mb-5 space">
      <Card className="bg-body-secondary shadow-sm border-0 rounded d-flex flex-row flex-wrap justify-content-center align-items-center custom-card p-4">
        {/* Content Section */}
        <Card.Body className="handle-width">
          <Card.Title>Latest Trending</Card.Title>
          <Card.Subtitle className="mb-3 custom-subtitle">
            Wireless Headphones
          </Card.Subtitle>
          <Card.Text>
            Experience premium sound with our wireless headphones, offering
            crisp audio, deep bass, and long battery life. Designed for comfort
            and style, they're perfect for work, travel, and leisure.
          </Card.Text>
          <Button variant="primary">Shop Now</Button>
        </Card.Body>

        {/* Image Section */}
        <div className="image-container">
          <img
            src={Image}
            alt="Wireless Headphones"
            className="rounded-circle rotating-image"
          />
        </div>
      </Card>
    </Container>
  );
}

export default CustomCard;
