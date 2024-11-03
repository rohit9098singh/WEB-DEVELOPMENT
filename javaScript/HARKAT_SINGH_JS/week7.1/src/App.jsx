/**
 * import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import correctly
import './App.css';
import Dashboard from '../components/Dashboad'; // Ensure the filename is correct (Dashboard)
import Landing from '../components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  const navigate = useNavigate(); // useNavigate should be here

  return (
    <div style={{ background: "black", color: "white" }}> 
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;

 */

//============================= Another Way ========================================

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import correctly
import { lazy, Suspense } from "react"; // Don't forget to import Suspense

const Dashboard = lazy(() => import('../components/Dashboad')); // Fixed typo in component name
const Landing = lazy(() => import('../components/Landing')); 

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense for lazy loading */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function Navigation() {
  const navigate = useNavigate(); // useNavigate should be here

  return (
    <div style={{ background: "black", color: "white" }}> 
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;

