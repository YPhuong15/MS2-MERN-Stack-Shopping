import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import PokeBall from '../resources/pokeballmall.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function AboutUs() {
    return (
        <div>
            <Container className="justify-content-evenly">
                <Row className="justify-content-md-center">
                    <Col style={{padding: '50px 20px'}}>
                        <Image src={PokeBall} alt='pokemall' style={{width:'70%'}} />
                    </Col>
                    <Col style={{padding: '130px 10px 100px'}}>
                        <Card style={{padding: '50px', background: 'radial-gradient(circle, rgba(255, 244, 180, 1) 0%, rgba(255, 224, 49, 1) 100%)'}}>
                        <p>Remember the carefree days of childhood when you would watch your favorite Pokemon on screen all day?</p>
                        <p>Well no need to live in the past any longer, with Pokemall we are bringing your childhood back and making it better!</p>
                        <p>Now you can buy your favorite Pokemon and even dress them up! From your favorite starters to their evolutions, 
                            experience the joy you once felt and allow us to make it even better for you!</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs  