import Container from "react-bootstrap/esm/Container";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Container>


      <Navbar expand="lg" className="bg-body-tertiary">

        <Navbar.Brand href="#home" className="logo p-3">
          INTERIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Link to="/">HOME</Link> */}
            {
              props.mainmenu.map((item) => {

                return (
                  <Link to={item.route}>{item.name}</Link>
                )
              })

            } 


            {/* <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/blog">BLOG</Link> */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

  );
}
export default Header;