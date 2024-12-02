import orderModel from "../models/orderModel";
import userModel from "../models/userModel";
import Stripe from "stripe"

const stripe =new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order from frontend
const placeOrder=async(req,res)=>{
    const userId=req.userId
      try {
        const newOrder=new orderModel({
            userId:userId, // from the middleware
            items:req.body.items,
            amount:req.body.address,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}});
        
        const line_items = req.body.items.map(()=>({
             price_data:{
              currency:"inr",
              product_data:{
                name:item.name
              },
              unit_amount:item.price*100
             }
             quantity
        }))
      } catch (error) {
        
      }
}

export {placeOrder}