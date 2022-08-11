import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import Image1 from "../resources/PikachuEevee1.png";
import Image2 from "../resources/PikachuEevee2.png";

function Homepage() {
  return (
    <div>
      <NavBar />
      <div className="row" style={{ margin: "30px 0px 0px 0px" }}>
        <div className="col">
          <img alt="Pikachu and Eevee artwork by Birdspells" src={Image1} style={{ width: "80%" }} />
        </div>
        <div className="col">
          <div className="homepage-caption">
            <div style={{ textAlign: 'left' }}>
              Welcome Pokemon Masters!
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
          <img alt="Image of Pikachu wearing a bowtie and Eevee with flowers on their ear and tail" src={Image2} style={{ width: "80%" }} />
        </div>
      </div>
      <div className="carousel">
      <Carousel/>
      </div>
    </div>
  )
}

export default Homepage;
