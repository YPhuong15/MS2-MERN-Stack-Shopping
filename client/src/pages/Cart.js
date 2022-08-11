import React from 'react'
import NavBar from '../components/NavBar'
import ShoppingCart from '../components/ShoppingCart';

function ViewCart() {
    const [cartData, setCartData] = React.useState([]);

    React.useEffect(() => {
        const getCart = async () => {
          const response = await fetch("/api/products/getCart");
          const newData = await response.json();
          setCartData(newData);
        };
        getCart();
      }, []);


    return (
        <div>
            <NavBar/>
            <div>
                <ShoppingCart cartData={cartData}/>
            </div>
             {/*list of products alsp show in hompage */}

        </div>   
    )
}

export default ViewCart;