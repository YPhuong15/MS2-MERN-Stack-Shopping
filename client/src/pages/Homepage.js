import React from "react";
import Carousel from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import Image1 from "../resources/PikachuEevee1.png";
import Image2 from "../resources/PikachuEevee2.png";
import Image3 from "../resources/croppedlogo.png"

function Homepage() {
  return (
    <div>
      <h1>Welcome to the</h1>
      <img alt="PokeMall logo" src={Image3} style={{ width: "25%" }} />
      <hr style={{
            background: '#FFFFFF',
            color: '#000000',
            opacity: '30%',
            height: '4px',
            width: '80%',
            margin: 'auto',
            marginTop: '25px',
            marginBottom: '55px',
            boxShadow: '0px 5px 10px white'
          }} />
      <div className="row" style={{ margin: "30px 0px 0px 0px" }}>
        <div className="col">
          <img alt="Pikachu and Eevee artwork by Birdspells" src={Image1} style={{ width: "60%" }} />
        </div>
        <div className="col">
          <div className="homepage-caption">
            <div style={{ textAlign: 'left' }}>
              Choose your new partner!
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="homepage-caption">
            <div style={{ textAlign: 'right' }}>
              Don't forget your accessories!
            </div>
          </div>
        </div>
        <div className="col">
          <img alt="Image of Pikachu wearing a bowtie and Eevee with flowers on their ear and tail" src={Image2} style={{ width: "60%" }} />
        </div>
      </div>
      <hr style={{
            background: '#FFFFFF',
            color: '#000000',
            opacity: '30%',
            height: '4px',
            width: '80%',
            margin: 'auto',
            marginTop: '55px',
            marginBottom: '55px',
            boxShadow: '0px 5px 10px white'
          }} />
      <h2 style={{margin: '-10px 0px 30px 0px'}}>Browse our Featured Items</h2>
      <div className="carousel">
      <Carousel/>
      </div>
    </div>
  )
}

export default Homepage;
