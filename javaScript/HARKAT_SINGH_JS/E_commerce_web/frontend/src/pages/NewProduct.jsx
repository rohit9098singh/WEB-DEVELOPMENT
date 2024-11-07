import React from 'react'

function NewProduct() {
  return (
    <div >
      <form className='border border-red-200 m-auto w-full max-w-md flex flex-col p-3'>
         <label htmlFor="name">Name</label>
         <input type="text" name='name' />
          <select>
            <option>Fruits</option>
            <option>Vegetable</option>
            <option>Icecream</option>
            <option>Dosa</option>
            <option>pizza</option>
          </select>
          <div className='h-7 w-full bg-slate-500'>

          </div>
      </form>
    </div>
  )
}

export default NewProduct