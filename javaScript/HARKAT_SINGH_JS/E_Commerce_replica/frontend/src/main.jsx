
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from "../src/pages/Menu.jsx";
import About from "../src/pages/About.jsx";
import Contact from "../src/pages/Contact.jsx";
import Home from "../src/pages/Home.jsx";
import NewPage from './Pages/Newpage.jsx';
import SignUp from './Pages/Signup.jsx';
import { createBrowserRouter,Route,RouterProvider  } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/newpage",
        element:<NewPage/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>

)
