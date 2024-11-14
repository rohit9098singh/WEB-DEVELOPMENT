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
import Cart from "./pages/cart.jsx";
import SignUp from "./pages/SignUp.jsx";
import store from "./redux/index.js"
import {Provider} from "react-redux"

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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "menu/:filterby",
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
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider  store={store}>
    <RouterProvider router={router} />
  </Provider>
);
