import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from "./pages/PlaceOrder"
import Footer from './components/Footer'
import { useState } from 'react'
import UserLogDetails from './components/UserLogDetails'

function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
    {login ? <UserLogDetails setLogin={setLogin}/> :<></>}
      <div className='mx-[10%]'>
        <Navbar setLogin={setLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
