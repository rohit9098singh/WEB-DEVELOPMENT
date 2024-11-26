import React from 'react'
import {assets} from "../assets/frontend_assets/assets"

function Appdownload() {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-gray-100 drop-shadow-md rounded-lg gap-8' id='Appdownload'>
        <p className='text-2xl md:text-3xl font-semibold text-slate-900 text-center leading-relaxed'>For better experience download <br /> <span className='text-red-600'>Tomato App</span> </p>
        <div className='download_app flex  flex-col md:flex-row items-center gap-5 '>
            <img src={assets.play_store} className='w-30 md:w-40 sm:w-24 h-auto transform duration-500 hover:scale-110' />
            <img src={assets.app_store} className='w-30 md:w-40 sm:w-24 h-auto transform duration-500 hover:scale-110'/>
        </div>
    </div>
  )
}

export default Appdownload