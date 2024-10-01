const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;  // Return the data if needed
  } catch (error) {
    console.error("Error fetching data:", error);  // Log the error for debugging
  }
};

//context we make to globally state ko manage karne liye or data to pass karne ke liye components ke liye 