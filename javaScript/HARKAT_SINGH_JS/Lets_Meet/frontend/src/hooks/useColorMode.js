import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

// Custom hook to manage color mode (light/dark) with localStorage support
const useColorMode = () => {
    // Fetch color mode from localStorage or initialize it to "light" if not present
    const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

    // Effect to dynamically update the DOM based on the current color mode
    useEffect(() => {
        if (typeof window !== "undefined") { // Ensure code runs only in the browser
            const className = "dark"; // CSS class for dark mode
            const bodyClass = window.document.body.classList; // Access the body element's classList
            
            // Add or remove the "dark" class from the <body> based on colorMode
            colorMode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
        }
    }, [colorMode]); // Runs whenever colorMode changes

    // Return the current color mode and the function to update it
    return [colorMode, setColorMode];
};

export default useColorMode;




/**
 * Explanation:
 * 
 * Let’s say the user visits the website:
 * 
 * 1. **First Visit (No Value in localStorage)**:
 *    - Key: "color-theme"
 *    - Since localStorage doesn’t have "color-theme", useLocalStorage initializes it to "light".
 *    - Now, the colorMode is "light".
 * 
 * 2. **Effect Execution**:
 *    - Since colorMode is "light", the "dark" class is removed from the <body>.
 * 
 * 3. **User Switches to Dark Mode**:
 *    - When the user toggles dark mode, `setColorMode("dark")` is called.
 *    - This updates:
 *      - `colorMode` state to "dark".
 *      - `"color-theme"` in localStorage to "dark".
 * 
 * 4. **Effect Re-Execution**:
 *    - With colorMode now set to "dark", the "dark" class is added to the <body>, activating dark mode styling.
 * 
 * 5. **Return Visit**:
 *    - On the next visit, useLocalStorage fetches `"dark"` from localStorage for "color-theme".
 *    - `colorMode` is set to "dark" immediately, and the "dark" class is applied to <body>.
 * 
 * Why is it needed?
 * -----------------
 * 1. **Persisting User Preferences**:
 *    - Storing the theme in localStorage ensures the user’s preference persists across sessions.
 *    - For example, if the user switches to dark mode, they won’t need to re-enable it every time they visit the website.
 * 
 * 2. **Dynamic DOM Updates**:
 *    - The `useEffect` ensures the DOM reflects the current theme by adding or removing the "dark" class dynamically.
 * 
 * 3. **Easy State Management**:
 *    - `useLocalStorage` simplifies managing state while also syncing it with localStorage.
 * 
 * Why is it not explicitly passing key-value pairs in useColorMode?
 * -----------------------------------------------------------------
 * - The key-value pair is being set internally by useLocalStorage:
 *   - Key: `"color-theme"`.
 *   - Value: `"light"` or `"dark"`.
 * - `useColorMode` relies on `useLocalStorage` to handle all the localStorage read/write operations.
 */
