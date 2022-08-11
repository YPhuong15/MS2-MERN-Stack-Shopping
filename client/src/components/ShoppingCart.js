import React from "react";
import {Link} from "react-router-dom"
import ThankYou from "./ThankYouPopup";

function CartItems(props) {
  const cartList = props.cartData;
  //console.log(cartList); //can show the list of products
  var totalPrice = 0;

  return (
    <div className="container">
        <h1>Shopping Cart</h1>
        <div className="row">
         {[...cartList]
          .map((cartItem) => {
           return(
             <div className="cart-card d-flex" key = {cartItem._id}>
               <Link className="d-flex"
               to={{pathname: `/product/${cartItem._id}` }}
               state={{
                 id: cartItem._id,
                 name: cartItem.name,
                 price: cartItem.price,
                 image1: cartItem.image[0],
                 image2: cartItem.image[1],
                 image3: cartItem.image[2],
               }}
               >
                <div className="cart-image">
                 <img src={cartItem.image[0]} alt={cartItem.name}/>
                </div> 
                 <div className="cart-name">{cartItem.name}</div>
               </Link>
               <div className="col cart-price">P$ {cartItem.price}</div>
               <div hidden>{totalPrice += cartItem.price}</div>
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
            TOTAL AMOUNT P$ {totalPrice}
            </div>
        </div>
        <div className="row">
            <ThankYou/>
        </div>
        
      </div>
)
    }
export default CartItems;
