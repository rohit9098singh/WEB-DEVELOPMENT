import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure Toastify's CSS is imported
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch=useDispatch() //gives the access of state 
  const productData=useSelector((state)=>state.product);
 
  
  const serverDomain=import.meta.env.VITE_SERVER_DOMAIN;
  useEffect(()=>{
    (async()=>{
         const res=await fetch(`${serverDomain}/getProductDetails`);
         const resData= await res.json(res)
        console.log(resData);
         dispatch(setDataProduct(resData))
    })()
  },[])
  console.log(productData);
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
