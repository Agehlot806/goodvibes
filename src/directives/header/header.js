import { Button, Container, Nav, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logodemo.png";
import "./header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-area">
      <Container>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Brand href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <Nav.Link href="">
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/signup">Signup</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/service">Services</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/blog">Blog</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/contactus">Contact us</Link>
            </Nav.Link>
            <Nav.Link href="">
              {" "}
              <Link to="/help">Help</Link>
            </Nav.Link>
            {/* <Nav.Link href="">
              {" "}
              <Link to="/faqs">FAQs</Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
