import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
