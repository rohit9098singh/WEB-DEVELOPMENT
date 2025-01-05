import { ChatTeardropText } from '@phosphor-icons/react'
import React from 'react'
const logo = () => {
  return (
    <div className='flex items-center space-x-2'>
        <ChatTeardropText size={32} weight='bold'/>
         <div className='text-2xl font-bold text-body dark:text-white'>
            Meet me
         </div>
    </div>
  )
}

export default logo