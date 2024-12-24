// WishPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { deleteWish } from '../rtk/slices/wishSlice';
import AddToCartButton from '../components/AddToCartButton';
import './WishPage.css';
import { Link } from 'react-router-dom';

const WishPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wish);
  const handleDelete = (product) => {
    dispatch(deleteWish(product));
  };

  return (
    wishlist.length > 0 ?
    <Container style={{marginTop:"105px",marginBottom:"50px"}} className="wish-page">
      <Row>
        {wishlist.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={6} lg={4} xl={3} className="mb-4">
            <Card className="wish-card shadow-sm">
              <div className="wish-image-container">
                <Card.Img variant="top" src={product.image} alt={product.name} className="wish-image" />
              </div>
              <Card.Body>
                <Card.Title className="wish-card-title text-primary fw-bold">{product.name}</Card.Title>
                <Card.Text className="wish-card-price text-danger fw-bold">${product.price}</Card.Text>
                <Card.Text className="wish-card-description text-muted">{product.description}</Card.Text>
                <div className="wish-card-buttons">
                  <AddToCartButton product={product} />
                  <Button
                    variant="danger"
                    className="delete-wish-button"
                    onClick={() => handleDelete(product)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container> :
    <Container
    style={{ marginTop: "120px", marginBottom: "50px" }}
    className="empty-cart-container"
  >
    <div className="empty-cart-content">
      <div className="empty-cart-icon">
        <i
          className="bi bi-heart"
          style={{ fontSize: "80px", color: "#f44336" }}
        ></i>
      </div>
      <h2>Your Wish List is Empty!</h2>
      <p>
        It looks like you haven’t added anything to your wish list yet. Let’s
        change that!
      </p>
      <div className="empty-cart-image">
        <img
          src="https://via.placeholder.com/300x200.png?text=Empty+Wish+List"
          alt="Empty Wish List"
        />
      </div>
      <div className="cta-buttons">
        <Button as={Link} to="/products" variant="primary" className="cta-btn">
          Shop Now
        </Button>
        <Button
          as={Link}
          to="/"
          variant="outline-primary"
          className="cta-btn"
        >
          Categories
        </Button>
      </div>
    </div>
  </Container>
  );
};

export default WishPage;
