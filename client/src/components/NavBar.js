import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../resources/logopoke.png";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useState} from 'react';

export default function Navigation() {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img alt="logo" src={Logo} style={{ width: "50%" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Product">Pokemon</NavDropdown.Item>
                <NavDropdown.Item href="/Accessories">
                  Accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Link to={{pathname: `/search/` }}
              state={{searchTerm: search}}>
                <Button size="sm" variant="outline-primary">
                  Search
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link href="/Cart">
              View Cart <BsCart3 />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        className="banner"
        sticky="top"
      >
        <Navbar.Brand href="Subscribe">
          Subscribe to Our Email List
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
