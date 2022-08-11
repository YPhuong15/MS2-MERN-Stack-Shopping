import React, { Component } from 'react';
import Image1 from '../resources/logopoke.png';
import Image2 from '../resources/logopoke.png';
import Image3 from '../resources/logopoke.png';
import Image4 from '../resources/logopoke.png';
import Image5 from '../resources/logopoke.png';
import Slider from './Slider'

const images = [Image1, Image2, Image3, Image4, Image5];

export default class Carousel extends Component {
  render() {
    return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              groupCells: true,
              fullscreen: false,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div style={{ width: '80%', height: '250px', margin: '0 0.5em' }} key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
    );
  }
}