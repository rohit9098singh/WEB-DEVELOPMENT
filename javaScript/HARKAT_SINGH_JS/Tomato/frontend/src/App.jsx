import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from "./pages/PlaceOrder"
import Footer from './components/Footer'
import { useState } from 'react'
import UserLogDetails from './components/UserLogDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
    <ToastContainer/>
    {login ? <UserLogDetails setLogin={setLogin}/> :<></>}
      <Navbar setLogin={setLogin}/>
      <div className='mx-[10%] '>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <Footer  />
    </>
  )
}

export default App
