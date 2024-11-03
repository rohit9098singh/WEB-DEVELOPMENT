import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Menu from "../src/pages/Menu.jsx";
import About from "../src/pages/About.jsx";
import Contact from "../src/pages/Contact.jsx";
import Home from "../src/pages/Home.jsx"
import Login from "../src/pages/Login.jsx"
import NewProduct from "../src/pages/NewProduct.jsx"
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,  // Default home route
        element: <Home />, // Assuming you have a Home component
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/newproduct",
        element:<NewProduct/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
