import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div className="fixed-bottom" style={{ paddingBottom: '0px'}}>
            <Container fluid style={{backgroundColor: 'gray'}}>
                <Row>
                    <Col xs={6} md={4}>
                        <a href='/about' style={{marginLeft: '200px'}}>About Us </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#term' >Term Of Services </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#subscribe'>Subscribe to Our List </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <a href='/contact' style={{marginLeft: '200px'}}>Contact Us </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href='#privacy'>Privacy </a>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}