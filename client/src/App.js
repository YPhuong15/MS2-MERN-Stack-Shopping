import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import ProductDetails from "./pages/DetailsPage";
import Cart from './pages/Cart'
import SearchResults from './pages/SearchResults'
import AboutUs from "./pages/AboutUs";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route exact path="/product/:id" element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/search/' element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
