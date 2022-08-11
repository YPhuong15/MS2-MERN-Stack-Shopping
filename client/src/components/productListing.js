import React from "react";
import { Link } from "react-router-dom";

function ProductListing(props) {
  const productList = props.productsData;
  console.log(productList); //can show the list of products
  return (
    <div className="container">
      <h1>Available Pokemon</h1>
      <div className="row poke-list">
       {[...productList]
        .sort((a, b) => a.pokedex - b.pokedex)
        .map((product) => {
         return(
           <div className="col-sm-2 product-card" key = {product._id}>
             <Link
             to={{pathname: `/products/${product._id}` }}
             state={{
               id: product._id,
               name: product.name,
               price: product.price,
               type1: product.category[0],
               type2: product.category[1],
               image1: product.image[0],
               image2: product.image[1],
               image3: product.image[2],
             }}
             >
               <img src={product.image[0]} alt={product.name}/>
               <div className="list-name">{product.name}</div>
               <div className="list-price">P$ {product.price}</div>
 
 
             </Link>
             
           </div>
         )
     })}
      </div>
    </div>
  );
}
export default ProductListing;