// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const res = await axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`);
//         setTodos(res.data.todos);
//       } catch (error) {
//         console.log('Error fetching todos:', error);
//       }
//     };

//     fetchTodos();
//   }, []);

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <Todo title={todo.title} description={todo.description} />
//         </div>
//       ))}
//     </>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;

//=================================================================================================

    // HERE ON CLICKING ON THE BUTTON ONLY THE COUNT VALUES CHANGES DESPITE A RERENDER HAPPENS WHICH WE DONT WANT
    //IF ONE CHANGES A RERENDER SHOULD NOT HAPPEN ALWAYS 

    //=============================== MEMOISATION HELPS AT HERE ======================================
    // import { useMemo, useState } from "react";

    // function App(){
    //   const [counter, setCounter] = useState(0);
    //   const [inputValue, setInputValue] = useState(1);
    
    //   const count = useMemo(() => {
    //     console.log("memo got called  as you wrote something on the input box");
        
    //     letfinalCount = 0;
    //     for (let i = 1; i <= inputValue; i++) {
    //       finalCount = finalCount + i;
    //     }
    //     return finalCount;
    //   }, [inputValue]);
      
    //   return (
    //     <>
    //       <input 
    //         type="number"
    //         onChange={(e) => setInputValue(Number(e.target.value))}
    //         placeholder={"find the sum from 1 to n"}
    //       />
    //       <br />
    //       Sum from 1 to {inputValue} is {count}
    //       <br />
    //       <button onClick={() => setCounter(counter + 1)}>
    //         counter ({counter})
    //       </button>
    //     </>
    //   );
    // }
    
    // export default App;
    

  //========================================== USECALLBACK ===============================================
  
  // they are used to memoise the function just becasue they are not refreacially equal so react think them as differnt and tries to rerender 
  // let a=1,let b=2;
  // a==b==> true
  // function sum(let a ,let b){
  //   return a+b
   //}
  // function sum2(let a ,let b){
  //   return a+b
  //}
   // sum ==sum2 ==>false 

   import { memo, useCallback, useState } from "react";

   function App() {
     const [count, setCount] = useState(0);
   
     const inputFunction = useCallback(() => {
       console.log("hi there");
     }, []);
   
     return (
       <div>
         <ButtonComponent inputFunction={inputFunction} />
         <button onClick={() => setCount(count + 1)}>
           Click me ({count})
         </button>
       </div>
     );
   }
   
   const ButtonComponent = memo(function ({ inputFunction }) {
     console.log("child render");
     
     return (
       <div>
         <button onClick={inputFunction}>Button clicked</button>
       </div>
     );
   });
   
   export default App;
   
  
