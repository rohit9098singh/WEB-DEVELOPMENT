import { useState,createContext } from 'react'
import Child_A from './components/Child_A';

// STEP 1=>CREATE A CONTEXT FIRST
// STEP 2=> WRAP ALL THE CHILD INSIDE THE PROVIDER 
// STEP 3=> 3.1 CREATE AND HENCE =>3.2 PASSS THE VALUE 
// STEP 4=> CONSUMENR KE ANDAR JAKE CONSUME KAR LO JO KE CHILDS HAI

 const userContext=createContext(); // STEP 1

function App() {
  const [user,setuser] = useState({
    name:"Rohit", //STEP 3.1
  })
  return (
    <>
       <userContext.Provider value={user}> {/** step 3.2 */}
           <Child_A/>  {/** STEP 2 */}
       </userContext.Provider>
    </>
  )
}

export default App
export {userContext} 