import { Route, Routes } from 'react-router-dom'
import Main from './pages/mainPart/Main'
import Login from './pages/auth/LogIn'
import Signup from './pages/auth/Signup'
import EmailVerification from './pages/auth/EmailVerification'

function App() {
  return (
      <>
        <Routes>
           <Route index={true} element={<Main/>}/>
           <Route path='auth/login' element={<Login/>}/>
           <Route path='auth/signup' element={<Signup/>}/>
           <Route path='auth/verify' element={<EmailVerification length={4}/>}/>
        </Routes>
      </>
  )
}
export default App
