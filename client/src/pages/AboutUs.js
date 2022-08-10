import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Logo from '../resources/logopoke.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutUs() {
    return (
        <div>
            <Container className="justify-content-evenly">
                <Row className="justify-content-md-center">
                    <Col style={{padding: '100px 20px'}}>
                        <Image src={Logo} alt='pokemall' thumbnail />
                    </Col>
                    <Col style={{padding: '130px 10px 100px'}}>
                        <p>PokeMall starts</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs  