import React, {useEffect, useState} from 'react'
//import BackgroundImg from '../components/BackgroundImg'
import NavBar from '../components/NavBar'

function Homepage() {
    const [productsData, setProductsData] = useState([])
    const getProducts = () => {
        fetch('/api/products/getProducts')
            .then(response => response.json())    
            .then(data => {
                 setProductsData(response.data)
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