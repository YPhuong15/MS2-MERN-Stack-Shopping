import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import ProductDetail from './pages/productDetail';
import NavBar from './components/NavBar'
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


