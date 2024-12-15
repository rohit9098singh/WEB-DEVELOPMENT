import { useState, useEffect } from "react";

// Custom hook to store and retrieve data from localStorage in key-value pairs (e.g., "theme", "dark").
// Example: If the key is "theme" and the value is "dark", this hook will ensure that the value ("dark") 
// is persisted in localStorage and can be retrieved and updated easily in your React application.

function useLocalStorage(key, initialValue) {
  // State variable to hold the stored value
  // Example: If the key is "theme", it checks localStorage for its value.
  // If "theme" exists in localStorage (e.g., "dark"), it is parsed and stored in `storedValue`.
  // Otherwise, the default value `initialValue` (e.g., "light") is used.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Retrieve the value from localStorage using the provided key
      const item = window.localStorage.getItem(key);

      // If a value exists, parse and return it (e.g., "dark").
      // If no value exists for "theme", use the default `initialValue` (e.g., "light").
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If an error occurs (e.g., JSON parsing fails), log it and use the default `initialValue`.
      console.log(error);
      return initialValue;
    }
  });

  // useEffect ensures that localStorage is updated whenever the `storedValue` or `key` changes.
  useEffect(() => {
    try {
      // Determine the value to store in localStorage:
      // If `storedValue` is a function, call it with the current value to get the new value.
      // Otherwise, use the value as is.
      const valueToStore =
        typeof storedValue === "function" ? storedValue(storedValue) : storedValue;

      // Save the value in localStorage as a JSON string using the provided key.
      // Example: If the key is "theme" and `storedValue` is "dark",
      // this will store `{"theme": "dark"}` in localStorage.
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // If an error occurs during storage (e.g., localStorage is full), log it to the console.
      console.log(error);
    }
  }, [key, storedValue]);

  // Return the stored value and a function to update it, similar to useState.
  // Example: `[storedValue, setStoredValue]` allows you to get and update the "theme" value.
  // If `setStoredValue("light")` is called, the value in localStorage will be updated to "light".
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
