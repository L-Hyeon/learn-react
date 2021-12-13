import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Element from "./components/element";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todos/:id" element={<Element />} />
      </Routes>
    </div>
  );
}

export default App;
