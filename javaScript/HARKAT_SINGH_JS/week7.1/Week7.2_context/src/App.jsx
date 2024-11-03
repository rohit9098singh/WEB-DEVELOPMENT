    // // App.jsx
    // import { useContext, useState } from 'react';
    // import './App.css';
    // import { CountContext } from './context'; // Import the context from context.js

    // function App() {
    //   const [count, setCount] = useState(0);

    //   return (
    //     <CountContext.Provider value={count}>
    //       <Count setCount={setCount} />
    //     </CountContext.Provider>
    //   );
    // }

    // export default App;

    // // Count component that renders CountRender and Button components
    // function Count({ setCount }) {
    //   return (
    //     <div>
    //       <CountRender />
    //       <Button setCount={setCount} />
    //     </div>
    //   );
    // }

    // // Component to render the count value
    // function CountRender() {
    //   const count = useContext(CountContext); // Access the count from CountContext
    //   return <div>{count}</div>;
    // }

    // // Component for buttons to increase or decrease the count
    // function Button({ setCount }) {
    //   const count = useContext(CountContext); // Access the count from CountContext
    //   return (
    //     <div>
    //       <button onClick={() => setCount(count + 1)}>Increase</button>
    //       <button onClick={() => setCount(count - 1)}>Decrease</button>
    //     </div>
    //   );
    // }

//=========================================== USING RECOIL METHOD ====================================================

import { RecoilRoot, useRecoilValue,useRecoilState} from "recoil";
import { evenSelector } from "./store/atoms/count";
import {countAtom} from "./store/atoms/count"

function App(){
  return(
    <div>
       <RecoilRoot>
         <Count/>
       </RecoilRoot>
    </div>
  )
}

function Count(){
  return (
    <div>
       <CountRenderer/>
       <Buttons/>
    </div>
  )
}

function CountRenderer(){
  const count=useRecoilValue(countAtom); // because here only i need the value not the full state  const [count,setCOunt]=useRecoilState(countAtom);
  return(
    <div>
       <b>
         {count}
       </b>
       <EvenCountRenderer/>
    </div>
  )
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return(
    <div>
       {isEven? "it is an even number ":"it is a odd number "}
    </div>
  )
}

function Buttons(){
  const [count,setCount]=useRecoilState(countAtom);
    return(
      <div>
              <button onClick={() => setCount(count + 1)}>Increase</button>
              <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    )
}

export default App;