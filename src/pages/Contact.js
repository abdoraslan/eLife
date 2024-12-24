import React from "react";
import { Carousel, Form, Button, Container } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Image1 from "../eLife Images/7.jpg";
import Image2 from "../eLife Images/8.jpg";
import Image3 from "../eLife Images/9.jpg";

const ContactUs = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Container className="contact-section">
      <div className="contact-carousel">
        <Carousel>
          {[Image1, Image2, Image3].map((image, index) => (
            <Carousel.Item key={index} className="carousel-item">
              <img className="d-block w-100 carousel-image" src={image} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <div className="contact-content">
                  <h2>Contact Us</h2>
                  <div className="contact-details">
                    <div className="contact-item">
                      <FaPhoneAlt className="contact-icon" />
                      <span
                        className="contact-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://wa.me/201154948109", "_blank")}
                      >
                        01154948109
                      </span>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <span
                        className="contact-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("mailto:abdoraslan557@gmail.com", "_blank")}
                      >
                        abdoraslan557@gmail.com
                      </span>
                    </div>
                    <div className="contact-item">
                      <FaMapMarkerAlt className="contact-icon" />
                      <span className="contact-text">Suez, Shabab El Mosls</span>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="contact-form-container">
        <h3 className="text-primary">Contact Us</h3>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your message" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Send Message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ContactUs;
