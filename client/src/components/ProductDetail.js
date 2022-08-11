import React from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{location.state.name}</h1>
          <hr style={{
            background: '#FFFFFF',
            color: '#FFFFFF',
            opacity: '100%',
            borderBottom: '2px solid black',
            height: '6px',
            margin: '-20px 0px 10px 0px'
          }} />
          <h2>{location.state.type1}  &emsp; {location.state.type2}</h2>
          <h3>P${location.state.price}</h3>
          <Button variant="warning">Add to cart</Button>

        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="details-image">
                  <img width="250" src={location.state.image1} alt={location.state.name} />
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{textAlign: 'center', fontWeight: '500', fontSize: '20px', color: 'white', textShadow: '1px 1px black'}}>Add an Accessory!</div>
              <div className="accessory-images d-flex">
                <div className="accessory-image">
                  <img width="125" src={location.state.image2} alt={location.state.name} />
                </div>
                <div className="accessory-image">
                  <img width="125" src={location.state.image3} alt={location.state.name} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductDetail;