import React, { useEffect, useState } from "react";


function App() {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // State to track name
  const [name, setName] = useState("");

  // On every render - equivalent to componentDidUpdate in class components
  useEffect(() => {
    console.log("I re-rendered");
  });

  // On first render/mount only - equivalent to componentDidMount in class components
  useEffect(() => {
    console.log("The component Mounted");
  }, []); // Empty dependency array ensures it runs only once, when the component mounts

  // On first render + whenever the dependency 'name' changes - equivalent to componentDidUpdate
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
  
    // Adding event listener to track window resize
    window.addEventListener("resize", updateWindowWidth);
  
    // Cleanup function runs on unmount - removes the resize event listener
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // This runs on mount, and cleanup runs on unmount
  
  return (
    <div className="App">
      <h1>React useEffect Examples</h1>
      <p>Current window width: {windowWidth}px</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>{name ? `Hello, ${name}!` : "Please enter your name."}</p>
    </div>
  );
}

export default App;
