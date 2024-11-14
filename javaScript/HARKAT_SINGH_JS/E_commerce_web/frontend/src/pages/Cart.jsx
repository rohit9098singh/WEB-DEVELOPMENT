import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const productcartItem=useSelector((state)=>state.product.cartItem);
  console.log("from cart file",productcartItem);
  
  return (
    <div className='p-2 md-p:4'>
       <h1 className='font-bold md:text-xl text-2xl text-slate-800'>Your Cart Items </h1>
       <div className=''>
        {/* displa\y the cart items over here  */}
        <div className=''>
              <div className=''>
                  <img src={productcartItem.img} />
              </div>
        </div>

         {/* display the total cart items  */}
         <div>
            
         </div>

       </div>
    </div>
  )
}
export default Cart