import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [flag, setflag] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setflag(!flag)}>{flag ? "Hide" : "Show"}</button>
        {flag && <Counter />}
      </header>
    </div>
  );
}

export default App;
