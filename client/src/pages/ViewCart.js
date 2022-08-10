import React from 'react'
import NavBar from '../components/navbar'
import ShoppingCart from '../components/ShoppingCart';

function ViewCart() {
    return (
        <div>
            {/* Navbar */}
            <NavBar/>
            <div>
                <ShoppingCart/>
            </div>
             {/*list of products alsp show in hompage */}

        </div>
        
        

    
    )
}

export default ViewCart;  