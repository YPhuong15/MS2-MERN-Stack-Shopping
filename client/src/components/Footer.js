import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div style={{ borderTop: '2px solid black', position: 'relative', left: '0', bottom: '0', right: '0'}}>
            <Container fluid style={{backgroundColor: 'black', height:'60px'}}>
                <Row>
                    <Col xs={6} md={4}>
                        <a href='/aboutus' className="footer-text" style={{marginLeft: '200px' }}>About Us </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#term' className="footer-text" >Term Of Services </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#subscribe' className="footer-text">Subscribe to Our List </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <a href='/contact' className="footer-text" style={{marginLeft: '200px'}}>Contact Us </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#privacy' className="footer-text">Privacy </a>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}