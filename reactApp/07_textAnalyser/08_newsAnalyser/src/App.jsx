import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";  // Corrected import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';  // Loading bar import

export default class App extends Component {
  apiKey = import.meta.env.VITE_NEWS_API_KEY // Access the variable here
  constructor() {
    super();
    this.state = {
      progress: 0,  // Initial progress is 0
    };
  }

  // Method to set progress
  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <div style={{ backgroundColor: "#e8f5e9" }}>
          <Navbar />
          {/* Loading bar component */}
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}  // Using progress from state
            onLoaderFinished={() => this.setProgress(0)}  // Reset to 0 on finish
          />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="general" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} articlesPerPage={5} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
