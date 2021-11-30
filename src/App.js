import React from "react";

const employees = ["Lee", "John", "Jane"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{employees[0]}</h1>
        <h1>{employees[1]}</h1>
        <h1>{employees[2]}</h1>

        <hr></hr>

        {employees.forEach((e) => {
          return <h1>{e}</h1>;
          //forEach는 map과 달리 결과를 반환하지 않음
        })}

        <hr />

        {employees.map((e) => {
          return <h1>{e}</h1>;
        })}

        <hr />

        {employees.map((e) => (
          <h1>{e}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
