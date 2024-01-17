import { Button, Container, Nav, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logodemo.png";
import "./header.css";

function Header() {
  return (
    <Navbar expand="lg" className="nav-area">
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
              <Link to="/account">Accounts</Link>
            </Nav.Link>
            {/* <Nav.Link href="">
              {" "}
              <Link to="/faqs">FAQs</Link>
            </Nav.Link> */}
            <Nav.Link href="">
              <Link to="/add-to-cart">
                <i className="fa-solid fa-cart-shopping" />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// import React from "react";
// import "./header.css";
// function Header() {
//   return (
//     <>
//       {/* <header>
//         <img
//           src="https://cdn2.ettoday.net/images/2824/2824095.jpg"
//           style={{ width: 50 }}
//         />
//       </header> */}
//       <nav>
//         <ul>
//           <li>
//             <a href="#" className="active">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Portfolio</a>
//           </li>
//           <li>
//             <a href="#">Team</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <section className="sec1"></section>
//       <section className="sec2">
//         <h2>Pure CSS sticky header</h2>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//       </section>
//       <section className="sec3" />
//     </>
//   );
// }
// export default Header;
