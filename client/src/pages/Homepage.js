import React, {useEffect} from 'react'
//import BackgroundImg from '../components/BackgroundImg'
import NavBar from '../components/NavBar'

function Homepage() {
    const getProducts = () => {
        fetch('api/products/getProducts')
            .then(response => response.json())    
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <NavBar><div>Homepage</div></NavBar>

    )
}

export default Homepage  