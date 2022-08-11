import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import ProductDetail from './pages/DetailsPage';
import NavBar from './components/NavBar'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


