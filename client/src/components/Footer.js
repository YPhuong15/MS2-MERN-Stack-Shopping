import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div className="Footer" style="bottom: 0px">
            <Container padding-bottom="50px">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="flex-grow-1 justify-content-evenly">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#AboutUs">About Us</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/product">Pokemon</NavDropdown.Item>
                            <NavDropdown.Item href="#Accessories">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button size="sm" variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Nav className="flex-grow-1 justify-content-evenly">
                        <Nav.Link href="/cart">View Cart <BsCart3 /></Nav.Link>
                    </Nav>
                </Container>
        </div>
    )
}