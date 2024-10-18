import React, { createContext, useState } from "react"; // Importing React
import Child_A from "./components/Child_A"; // Correctly importing Child_A

const themeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        {/* Conditional classes based on the theme */}
        <div className={`m-48 h-[400px] w-[400px] rounded-[4px] border-2 border-black flex justify-center items-center ${theme === "light" ? 'bg-white' : 'bg-gray-800'}`}>
          <Child_A />
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App; // Exporting the App component
export { themeContext };
