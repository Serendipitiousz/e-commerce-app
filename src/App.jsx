import { Navbar } from "./components/navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Cart } from "./pages/cart/cart"
import { Shop } from "./pages/shop/shop"
import { ShopContextProvider } from './context/shopContext.jsx'


function App() {
 

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
 
    </>
  )
}

export default App
