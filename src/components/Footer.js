import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Telegram, Twitter } from 'react-bootstrap-icons';
import Logo from "../eLife Images/elife_logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="text-black pt-5 pb-4" style={{backgroundColor: "#F2F2F2"}}>
      <Container>
        {/* Logo in the center of the first row */}
        <Row className="text-center">
          <Col>
            <img 
              src= {Logo} 
              alt="eLife Logo" 
              className="img-fluid mb-4"
              style={{ maxWidth: '170px' }} // Adjust logo size as needed
            />
          </Col>
        </Row>

        {/* Contact info with space between icons */}
        <div className="contact mb-3">
          <div className='d-flex flex-row align-items-center'>
          <i class="bi bi-telephone-fill fs-1 me-2"></i> <h5>01154948109</h5>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <Telegram className='fs-1 me-2'/> <h5>Telegram</h5>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <Twitter className='fs-1 me-2' /> <h5>Twitter</h5>
          </div>
        </div>

        {/* Horizontal rule */}
        <Row className="mb-3">
          <Col>
            <hr className="bg-white" />
          </Col>
        </Row>

        {/* Links and Copyright */}
        <div className='bottom-nav'>
          <div>
            <Link to="/" className="text-black mx-2 text-decoration-none">Home</Link>
            <Link to="/products" state={{name:null}} className="text-black mx-2 text-decoration-none">Products</Link>
            <Link to="/contact" className="text-black mx-2 text-decoration-none">Contact</Link>
          </div>
          <div>
            <span>&copy; 2024 eLife. All rights reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
