import React, { useContext } from 'react';
import Home from './pages/Home';
import Result from './pages/Result'; // Corrected import
import BuyCredit from './pages/BuyCredit';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Login from './components/login';
import { AppContext } from './context/AppContext';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const {showLogin}=useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position='bottom-right'/>
      <Navbar className=""/>
      {showLogin && <Login/>}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />    
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;