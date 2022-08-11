import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import ProductDetails from "./pages/DetailsPage";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Accessories from "./pages/AccessoriesPage";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route exact path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
