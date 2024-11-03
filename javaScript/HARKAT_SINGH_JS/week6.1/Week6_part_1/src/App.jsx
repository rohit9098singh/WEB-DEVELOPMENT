// import { useState } from 'react'
// import './App.css'

// function App() {
//   return (
//     <>
//       <CardWrapper innerComponent={TextComponent} />
//       <CardWrapper innerComponent={TextComponent} />
//     </>
//   );
// }

// function CardWrapper({ innerComponent: InnerComponent }) { // function that takes react component as an input
//   return (
//     <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
//       <InnerComponent />
//     </div>
//   );
// }

// function TextComponent() {
//   return (
//     <div>
//       hi there
//     </div>
//   );
// }

// export default App;

//======================================= THE BEST WAY OF USING THE WRAPPER =================================================

    // function App(){
    //   return (
    //     <div>
    //         <CardWrapper>
    //             hello world to this js tutorial  // IT CAN BE ANYTHING TEXT SPAN OR EVEN IT CAN BE A COMPONENT
    //         </CardWrapper>
    //     </div>
    //   )
    // }

    // function CardWrapper({children}){   // HERE THE CHILDREAN HAS THE ACCESS OF THE WHAT WE ARE DOING INSIDE APP CARDWRAPPER
    //   return (
    //     <div style={{border:"2px solid black",padding:20}}>
    //           {children}
    //     </div>
    //   )
    // }
 
// ====================================================== USE MEMO ==================================================================
import { memo, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    console.log("child clicked");
  }
  return (
    <>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}

const Child=memo(({onClick})=>{
  console.log("child render");
  return(
    <div>
      <button onClick={onClick}>button clicked</button>
    </div>
  )
  
})

export default App;