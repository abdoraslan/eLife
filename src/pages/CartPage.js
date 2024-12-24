import React from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Container } from "react-bootstrap";
import Image1 from "../eLife Images/1.png";
import Image2 from "../eLife Images/2.png";
import Image3 from "../eLife Images/3.png";
import {
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from "../rtk/slices/cartSlice";
import StarRating from "../components/Stars";
import { Link } from "react-router-dom";

const CartPage = () => {
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const totalPrice = products.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity);
  }, 0);

  const cartProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <div className="product-cart">
          <div className="product-cart-image ">
            <img
              src={product.image}
              alt={product.name}
              className="cart-product-image"
            />
          </div>
          <div className="product-cart-details">
            <h5 className="fw-bold text-primary">{product.name}</h5>
            <p>{product.description}</p>
            <div className="star">
              <StarRating rating={product.rating} />
            </div>
            <p className="text-danger fw-bold mt-2">
              Price: ${product.price.toFixed(2)}
            </p>
            <Button
              variant="outline-dark"
              size="sm"
              className="icon-btn"
              onClick={() => {
                if (product.quantity > 1) {
                  dispatch(decreaseQuantity(product));
                } else {
                  dispatch(deleteCart(product));
                }
              }}
            >
              <i className="bi bi-dash fw-bold text-danger"></i>
            </Button>
            <span className="counter-display fw-bold mx-2">
              {product.quantity}
            </span>
            <Button
              variant="outline-dark"
              size="sm"
              className="icon-btn"
              onClick={() => {
                dispatch(increaseQuantity(product));
              }}
            >
              <i className="bi bi-plus fw-bolder text-primary"></i>
            </Button>
            <p className="fw-bold text-success mt-1">
              Total: ${(product.price * product.quantity).toFixed(2)}
            </p>
            <Button
              variant="danger"
              size="sm"
              className="icon-btn"
              onClick={() => dispatch(deleteCart(product))}
            >
              <i className="bi bi-trash fw-bold"></i>
            </Button>
          </div>
        </div>
        <hr className="mt-0" />
      </div>
    );
  });

  return cartProducts.length > 0 ? (
    <Container className="cart-container">
      {/* Cart Products Display */}
      <div className="cart-view">
        <div className="cart-products shadow-sm">{cartProducts}</div>
        {/* Checkout Section */}
        <div className="checkout-container  shadow-sm">
          <div className="checkout-summary">
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <span>${totalPrice.toFixed(2)}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Shipping:</span> <span>$60.00</span>
            </p>
            <hr />
            <p className="d-flex justify-content-between fw-bold">
              <span className="text-danger">Total:</span>{" "}
              <span className="text-success">
                ${(totalPrice + 60.0).toFixed(2)}
              </span>
            </p>
          </div>

          {/* Promo Code */}
          <Form className="promo-code mt-3">
            <Form.Label className="fw-bold">Promo Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter promo code"
              className="promo-input"
            />
            <Button variant="primary" className="apply-promo-btn mt-2">
              Apply
            </Button>
          </Form>

          {/* Payment Methods */}
          <h5 className="fw-bold mt-4">Payment Methods</h5>
          <div className="payment-methods d-flex gap-3 mt-3">
            <img src={Image1} alt="Visa" className="payment-logo" />
            <img src={Image2} alt="PayPal" className="payment-logo" />
            <img src={Image3} alt="MasterCard" className="payment-logo" />
          </div>

          {/* Checkout Button */}
          <Button variant="success" className="fw-bold px-4 mt-4">
            Checkout
          </Button>
        </div>
      </div>
    </Container>
  ) : (
    <Container
    style={{ marginTop: "120px", marginBottom: "50px" }}
    className="empty-cart-container"
  >
    <div className="empty-cart-content">
      <div className="empty-cart-icon">
        <i
          className="bi bi-cart-x"
          style={{ fontSize: "80px", color: "#f44336" }}
        ></i>
      </div>
      <h2>Your Cart is Empty!</h2>
      <p>
        Looks like you haven’t added anything to your cart yet. Let’s change
        that!
      </p>
      <div className="empty-cart-image">
        <img
          src="https://via.placeholder.com/300x200.png?text=Empty+Cart"
          alt="Empty Cart"
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

export default CartPage;
