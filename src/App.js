import React from "react";

const employees = ["Lee", "John", "Jane"];
const e = ["x", "y", "z"];
const r = [...employees, ...e];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {r.map((a) => (
          <h1>{a}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
