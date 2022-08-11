import Container from 'react-bootstrap/Container'
import NavBar from '../components/NavBar'
import ProductDetail from '../components/ProductDetail'

function ProductDetails() {
    return (
        <div>
            <NavBar />
            <Container>
                <ProductDetail />
            </Container>
        </div>


    )
}

export default ProductDetails;