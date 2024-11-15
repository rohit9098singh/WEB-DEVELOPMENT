import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { useState } from 'react';
import RefreshHandler from '../components/RefreshHandler';

function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      {/* Place RefreshHandler outside Routes */}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
