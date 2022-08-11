import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThankYou from "./ThankYouPopup";
import "bootstrap/dist/css/bootstrap.min.css"


export default function ShoppingCart() {
    const [products, setProducts] = useState([]);

    // Fetch from database
    useEffect(() => {
      async function getProducts() {
        const response = await fetch(`http://localhost:3001/cart/`);
        const products = await response.json();
        setProducts(products);
      }
      getProducts();
      return;
    }, [products.length]);
  
  
    // Display All Products
    return (
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="row">
         {[...products]
          .map((product) => {
           return(
             <div className="cart-card d-flex" key = {product._id}>
               <Link className="d-flex"
               to={{pathname: `/product/${product._id}` }}
               state={{
                 id: product._id,
                 name: product.name,
                 price: product.price,
                 image1: product.image[0],
                 image2: product.image[1],
                 image3: product.image[2],
               }}
               >
                <div className="cart-image">
                 <img src={product.image[0]} alt={product.name}/>
                </div> 
                 <div className="cart-name">{product.name}</div>
               </Link>
               <div className="col cart-price">P$ {product.price}</div>
             </div>
           )
       })}
          <hr style={{
            background: '#FFFFFF',
            color: '#000000',
            opacity: '100%',
            height: '2px',
            margin: '20px 0px 10px 0px'
          }} />
        </div>
        <div className="row">
            <div className="cart-total">
            TOTAL AMOUNT
            </div>
        </div>
        <div className="row">
            <ThankYou/>
        </div>
        
      </div>
    );
   }