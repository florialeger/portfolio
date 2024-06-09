import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import cv from "./pages/cv/cv";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<cv />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
