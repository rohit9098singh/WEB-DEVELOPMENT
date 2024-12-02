import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Add from './pages/Add';
import List from './pages/List';
import Order from './pages/Order';
import Settings from './pages/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);


  const handleSidebarToggle = () => setSidebarToggle(!sidebarToggle);
  const url = "http://localhost:4000";
  return (
    <div className="flex h-screen">
      <ToastContainer/>
      <Sidebar sidebarToggle={sidebarToggle} />
      <div className="flex-1 flex flex-col">
        <Navbar handleSidebarToggle={handleSidebarToggle} />

        <div className=" bg-gray-100 p-6 overflow-auto">
          <Routes>
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/list" element={<List url={url}/>} />
            <Route path="/order" element={<Order url={url}/>} />
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
