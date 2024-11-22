import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Headers";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Products from './pages/Products';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
