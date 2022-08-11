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
            <Container className="justify-content-evenly" style={{marginBottom: '6vw'}}>
                <h1>What's PokeMall About?</h1>
                <Row className="justify-content-md-center">
                    <Col style={{margin: '1vw 0vw 0vw 0vw'}}>
                        <Image src={PokeBall} alt='pokemall' style={{width:'70%'}} />
                    </Col>
                    <Col style={{margin: '5vw 0vw 0vw 0vw'}}>
                        <Card style={{padding: '50px', border: '2px solid #ffe031', boxShadow: '2px 3px 5px black', borderRadius: '25px',background: 'linear-gradient(90deg, rgba(255,238,143,1) 0%, rgba(255,244,180,1) 50%, rgba(255,238,143,1) 100%)'}}>
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