import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css"
import { useNavigate } from "react-router-dom";
function Category({category,image,itemCount,setName}) {
  const navigate = useNavigate();
  return (
    <Col xs={6} sm={6} md={6} lg={4} className="pointer" onClick={()=>navigate("/products",{state: {name:setName}})}>
     <Card className="mb-3 shadow-sm border-0">
      <Row className="g-0">
        <Col className="bg-body-secondary category-image" md={4}>
          <Card.Img
            src={image}
            className="img-fluid rounded-start"
            alt="Card image"
          />
        </Col>
        <Col >
          <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text>
              <small className="text-body-secondary">
                {itemCount} items
              </small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Col>
  );
}

export default Category;
