import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProductPage from "./pages/DetailProductPage";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route exact path="/products/:id" element={<DetailProductPage/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
