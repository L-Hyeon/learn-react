import React, { useState } from "react";

function App() {
  const name = ["Lee"];
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {name.map((n) => (
          <h2>{n}</h2>
        ))}
        <hr />
        {name.length > 0 && <h1>{name[0]}</h1>}
        <hr />
        {loggedIn ? <h2>Hello</h2> : <h2>Please Log in </h2>}
        <button onClick={() => setloggedIn(!loggedIn)}>
          {loggedIn ? "Log Out" : "Log In"}
        </button>
      </header>
    </div>
  );
}

export default App;
