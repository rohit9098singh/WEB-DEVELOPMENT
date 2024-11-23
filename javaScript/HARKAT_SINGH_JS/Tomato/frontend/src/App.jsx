import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from "./pages/PlaceOrder"

function App() {
  return (
    <div className='mx-[10%]'>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/cart" element={<Cart/>}></Route>
           <Route path="/placeorder" element={<PlaceOrder/>}></Route>
        </Routes>
    </div>
  )
}

export default App
