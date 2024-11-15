
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { useState } from 'react';

function App() {
   // making of private routing 
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const PrivateRoute = ({ element }) => {
     return isAuthenticated ? element : <Navigate to="/login" />
   }
   return (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {/* Handle undefined routes */}
           <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
