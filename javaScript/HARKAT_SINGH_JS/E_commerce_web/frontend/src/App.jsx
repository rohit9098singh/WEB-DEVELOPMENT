import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure Toastify's CSS is imported


function App() {
  return (
    <>
      <ToastContainer />
      <div>
        <Header />
        <main className="pt-16 bg-green-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
