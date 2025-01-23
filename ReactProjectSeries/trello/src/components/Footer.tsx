import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between'>
                    <span className='flex text-sm text-gray-500 sm:text-center'>
                        © 2025 <li className='hover:underline'>Trello</li> .All Rights Reserved
                    </span>
                    <ul className='flex flex-wrap items-center mt-3 text-sm font-semibold text-gray-700 '>
                        <li className='hover:underline me-4 md:me-6'>About</li>
                        <li className='hover:underline me-4 md:me-6'>Privacy</li>
                        <li className='hover:underline me-4 md:me-6'>Licence</li>  
                        <li className='hover:underline me-4 md:me-6'>Contact</li>  
                        
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
