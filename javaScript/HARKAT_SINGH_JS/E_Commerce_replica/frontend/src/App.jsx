import { useState } from 'react'
import Header from "./components/Header"
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className='pt-16'>
           <Outlet/>
      </main>
    </>
  )
}

export default App
