import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News"; // Corrected import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'; // Loading bar import

const App = () => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Access API key
  const [progress, setProgress] = useState(0); // Use state for progress

  return (
    <Router>
      <div style={{ backgroundColor: "#e8f5e9" }}>
        <Navbar />
        {/* Loading bar component */}
        <LoadingBar
          color='#f11946'
          progress={progress} // Progress from state
          onLoaderFinished={() => setProgress(0)} // Reset to 0 on finish
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                articlesPerPage={5}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
