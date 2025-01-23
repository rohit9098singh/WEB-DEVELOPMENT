import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-white shadow'>
        <nav className='flex  items-center'>
            <Link href="/" className=' p-1.5'>
                <img src="/logo.png" className='h-8 w-auto' alt="" />
            </Link>
            <Link href="/login" className='text-md bg-blue-600 hover:bg-black  font-semibold leading-6 text-white px-8 py-2 rounded-md'>
                login
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
