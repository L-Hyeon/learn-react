import React from "react";
import TopBar from "./components/TopBar/top-bar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

// react-router-dom 사용법
// 1. index.js에서 App 태그를 BrowserRouter 태그로 감싼다.
// 2. App.js에서 바뀔 부분을 Switch문으로 감싼다.

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
