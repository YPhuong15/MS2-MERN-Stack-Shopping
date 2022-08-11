import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProductPage from "./pages/DetailProductPage";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<DetailProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
