import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import PokeBall from '../resources/pokeballmall.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/NavBar'

function AccessoriesPage() {
    return (
        <div>
            <NavBar/>
            <Container className="justify-content-evenly" style={{marginBottom: '6vw'}}>
                <h1>COMING SOON!</h1>
                <Row className="justify-content-md-center">
                    <Col style={{margin: '1vw 0vw 0vw 0vw'}}>
                        <Image src={PokeBall} alt='pokemall' style={{width:'70%'}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccessoriesPage  