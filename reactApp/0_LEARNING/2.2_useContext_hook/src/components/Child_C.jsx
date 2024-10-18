import { useContext } from "react";
import { themeContext } from "../App";

function Child_C() {
  const { theme, setTheme } = useContext(themeContext);

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button
      className="bg-black text-white rounded-[8px] p-2"
      onClick={handleTheme}
    >
      Change Theme
    </button>
  );
}

export default Child_C; // Exporting Child_C
