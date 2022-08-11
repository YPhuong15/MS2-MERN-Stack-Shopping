import Container from 'react-bootstrap/Container'
import ProductDetail from '../components/ProductDetail'
import NavBar from '../components/NavBar'

function ProductDetails() {
    return (
        <div>
            <NavBar/>
            <Container>
                <ProductDetail />
            </Container>
        </div>





    )
}

export default ProductDetails;