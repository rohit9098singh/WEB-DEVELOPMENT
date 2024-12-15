import { Chat, SignOut } from '@phosphor-icons/react'
import React from 'react'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'

const Sidebar = () => {
  return (
     <div className='flex flex-col justify-between border-r border-stroke p-2 dark:border-strokedark'>
          <div className='mx-auto bg-stone-200 dark:opacity-60 rounded-md border border-stroke p-2 dark:border-strokedark hover:bg-stone-300'>
             <Chat size={24} className='text-[#212121]'/>
          </div>
          <div className='flex flex-col space-y-2'>
            {/*dark mode button */}
            <DarkModeSwitcher/>
            
            {/**logout button */}
            <div className='mx-auto rounded-md dark:opacity-60 border border-stroke p-2 dark:border-strokedark bg-stone-200 hover:bg-stone-300 cursor-pointer'>
                <SignOut size={24} className='text-[#212121]'/>
            </div>
          </div>
     </div>
  )
}

export default Sidebar