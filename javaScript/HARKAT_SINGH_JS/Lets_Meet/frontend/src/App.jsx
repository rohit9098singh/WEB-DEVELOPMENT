import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
      <>
        <Routes>
           <Route index={true} element={<Main/>}/>
        </Routes>
      </>
  )
}

export default App
