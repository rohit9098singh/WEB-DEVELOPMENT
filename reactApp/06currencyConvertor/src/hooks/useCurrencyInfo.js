import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetching the currency data
    fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        // Log the response to verify the structure
        console.log("API response:", res);
        
        // Set data from the response, check structure
        if (res[currency]) {
          setData(res[currency]);
        } else {
          console.error(`Currency ${currency} not found in response`);
        }
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  // Return the currency data
  return data;
}
export default useCurrencyInfo;