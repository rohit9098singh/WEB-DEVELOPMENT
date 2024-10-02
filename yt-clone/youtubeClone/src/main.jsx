import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>{/**hum pure app me us api ke context ko use karna chahte hai isliye */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);
