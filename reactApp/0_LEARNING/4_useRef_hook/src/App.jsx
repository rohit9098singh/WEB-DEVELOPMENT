/**
 * useRef is a React hook that lets you create a reference to a DOM element or store a value that doesn’t cause re-renders when it changes.
 *
 * Even Simpler Explanation:-
 *  Think of it like a box: useRef gives you a box where you can keep a value or reference to an element.
 * Access without re-rendering: When you change what's inside the box, it won’t make your component re-render.
 * Great for direct manipulation: It’s often used to directly interact with HTML elements, like focusing on an input field.
 */

// import { useEffect, useRef } from "react";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

  // INTIAL NORMAL WAY
  // let val=1;

  // function handleIncrement() {
  //   setCount(count + 1);
  //   val +=1; //  YAHA PE HAMNE EK NORMAL VARIBALE BANA HAI JO KE CHANGE HOGA HE NHI VO HAR RENDER PE AAPNE ORGINAL VALUE 1 KO HE SATH LE CHALEGA
  //            //  YE USKE RERENDER HONE KE VAJA SE HOTA HAI
  //            //  BUT AGAR HUM CHAHTE HAI KE VO AAPNE PURANE  VALUES KO HAR RENDER PE YAADH RAKHE TO HUM USE (USEREF) SE BANAYENGE
  //   console.log(val);

  // }

    // FIRST USECASE
    import React, { useState, useEffect, useRef } from "react";

    function App() {
      // Using useState to track the count state
      const [count, setCount] = useState(0);
    
      // useRef to persist a value across renders
      let val = useRef(1);
    
      // Function to increment count and also update the val reference
      function handleIncrement() {
        setCount(count + 1);  // Increment the count state
        val.current += 1;  // Increment the val ref (without causing re-render)
        console.log(val.current);  // Log the value of val
      }
    
      // useRef to store reference to the button element
      let btnRef = useRef(); 
    
      // Function to change the color of the first button using the reference
      function changeColor() {
        btnRef.current.style.backgroundColor = "red";  // Change button's background color
      }
    
      // useEffect hook to log when the component re-renders
      useEffect(() => {
        console.log("Component re-rendered!");
      }, []);  // Empty dependency array, meaning this effect runs once on mount
    
      return (
        <>
          {/* Button that increments the count and logs val */}
          <button
            onClick={handleIncrement}
            ref={btnRef}  // Assign btnRef to this button to directly interact with it
          >
            Increment
          </button>
          <br />
    
          {/* Button to change the background color of the first button */}
          <button onClick={changeColor}>
            Change 1st button color
          </button>
          <br />
    
          {/* Display the current count */}
          <div>Count: {count}</div>
        </>
      );
    }
    
    export default App;
    

// import { useEffect, useRef,useState } from "react";
// import './App.css';
 

// function App(){

//   const [time,setTime]=useState(0);
//   let timerRef=useRef(null);

//   function startTimer(){
//      timerRef.current=setInterval(()=>{
//       setTime(time=>time+1);
//      },1000)
//   };
//   function stopTimer(){
//      clearInterval(timerRef.current);
//     //  timerRef.current=null;
//   }
//   function resetTimer(){
//       stopTimer();
//       setTime(0);
//   }
//   const minutes=Math.floor(time/60);
//   const seconds=time%60;
//   return(
//     <>
//         <h1> Stopwatch: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> 

//         <button onClick={startTimer}>
//           start
//         </button>
//         <button onClick={stopTimer}>
//           stop
//         </button>
//         <button onClick={resetTimer}>
//           Reset
//         </button>
//     </>
//   )
// }

// export default App;