import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: "#e8f5e9" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<News articlesPerPage={5} country="us" category="general" />} />
            <Route path="/general"  element={<News articlesPerPage={5} country="us" category="general" />} />
            <Route path="/business"  element={<News articlesPerPage={5} country="us" category="business" />} />
            <Route path="/entertainment" element={<News articlesPerPage={5} country="us" category="entertainment" />} />
            <Route path="/health" element={<News articlesPerPage={5} country="us" category="health" />} />
            <Route path="/science" element={<News articlesPerPage={5} country="us" category="science" />} />
            <Route path="/sports" element={<News articlesPerPage={5} country="us" category="sports" />} />
            <Route path="/technology" element={<News articlesPerPage={5} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
