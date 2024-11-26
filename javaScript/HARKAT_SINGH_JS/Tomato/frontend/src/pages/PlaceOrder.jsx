import React from 'react'
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <div className='flex  justify-between items-start'>
       <div className='left_part'>
           <p className='text-xl text-gray-700 font-semibold'>Delivary Information</p>
           <input 
            type="text"
            placeholder='First Name'
            { ...register("firstName",{
                 required:{value:true,message:"first name is required"},
                 minlength:{value:3,message:"first name must be atleast three chracter"}
              })
            }
           />
       </div>
       <div className='right_part'>

       </div>
        
    </div>
  )
}

export default PlaceOrder;
