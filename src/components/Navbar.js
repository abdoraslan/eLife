import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../eLife Images/elife_logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CollapsibleExample() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top shadow-sm custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} state={{ name: null }} to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link">
              Products
            </Nav.Link>
            <Nav.Link  as={Link} className="nav-link" to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">
              <i
                onClick={() => {
                  navigate("/cart");
                  window.scrollTo(0, 0);
                }}
                className="bi bi-bag"
              >
                {state.cart.length > 0 && (
                  <div className="bag-counter ">{state.cart.length}</div>
                )}
              </i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="">
              <i onClick={() => {
                  navigate("/wish");
                  window.scrollTo(0, 0);
                }} className="bi bi-heart">
                {state.wish.length > 0 && (
                  <div className="heart-counter ">{state.wish.length}</div>
                )}
              </i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
