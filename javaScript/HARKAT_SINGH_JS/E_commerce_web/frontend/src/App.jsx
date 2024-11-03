import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <Header/>
         <main className='pt-16 bg-green-100 min-h-[calc(100vh)]'>
            <Outlet/>
         </main>
    </div>
  )
}

export default App
