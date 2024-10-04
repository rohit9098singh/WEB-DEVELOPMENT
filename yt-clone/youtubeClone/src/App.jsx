import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import NavBar from './components/NavBar';
import PlayingVideo from './components/PlayingVideo';
import Home from './components/Home'; // Assuming you have a Home component
import Search from './components/Search'; // Assuming you have a Search component
import { useAuth } from './context/AuthProvider';
import Loading from './loader/Loading';

function App() {
  const {loading}=useAuth();
  return (
    <div>
      {loading && <Loading/>}
      <NavBar /> {/* NAVBAR KO HAME HAR EK PAGE PAR SHOW KARNA HAI ISLIYE YE YAHA HAI OR </sidebar> ko hata diye hai */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App; // This line ensures App is the default export
