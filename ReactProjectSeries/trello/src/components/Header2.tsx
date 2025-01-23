import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Header2 = () => {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-[10%] py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-pink-400 to-[#0055D1]'>
            <div className='text-white p-2'>
                <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
                    Trello Brings all Your Tasks, Team Mates, and Tools Together
                </h1>
                <p className='text-lg mt-3 leading-7 sm:leading-8'>
                    Simply flexible and powerful. All it takes are boards, lists, and cards to get a clear view of who's doing what and what needs to get done.
                </p>
                <h3 className='mt-5 text-xl font-semibold'>WHAT YOU GET ON THE FREE PLAN:</h3>
                <ul className='my-3 leading-7'>
                    <li>Unlimited cards</li>
                    <li>Unlimited power-ups per board</li>
                </ul>
                <div className='flex flex-col sm:flex-row w-full max-w-sm items-center space-y-3 sm:space-y-0 sm:space-x-3'>
                    <Input type='email' placeholder='Enter your email' className='w-full sm:w-auto' />
                    <button type='submit' className='text-md bg-blue-600 hover:bg-black font-semibold leading-6 text-white px-8 py-2 rounded-md'>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <img src="/header_img.jpg" alt="Trello Header" className='w-full h-auto object-cover' />
            </div>
        </div>
    )
}

export default Header2
