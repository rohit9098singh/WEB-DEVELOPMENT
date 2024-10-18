/**
 * The useMemo hook in React helps optimize performance by memoizing a calculated value. 
 * It remembers the result of a computation and only recalculates it when the dependencies change.
 */


import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  
  function expensivetask(num) {
    console.log("inside expensive task");
    
    for (let i = 0; i <= 100000000; i++) {
      // Simulating a heavy task
    }
    return num * 2;
  }

  // Using useMemo to memoize the result of the expensive task
  let doubledValue = useMemo(() => expensivetask(input), [input]); // useMemo takes two input the (function,dependecies)==> const cachedValue = useMemo(calculateValue, dependencies)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input
        type="number"
        placeholder="Enter number"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {doubledValue}
      </div>
    </>
  );
}

export default App;

