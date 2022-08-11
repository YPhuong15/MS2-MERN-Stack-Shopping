import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../resources/logopoke.png'
import { BsCart3 } from 'react-icons/bs'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='nav-bar'>
                <Container fluid>
                    <Navbar.Brand href="/home">
                        <img alt="logo" src={Logo} style={{width: '65%'}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="flex-grow-1 justify-content-evenly">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/product">Pokemon</NavDropdown.Item>
                            <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    <Nav className="justify-content-evenly">
                        <Nav.Link style={{margin: '60px'}} href="/cart">View Cart <BsCart3 /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar className="banner" sticky="top">
                <Navbar.Brand href="#Subscribe">Subscribe to Our Email List</Navbar.Brand>
            </Navbar>
        </div>
    )
}