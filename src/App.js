import React from "react";

const employee = {
  id: "1",
  name: "Lee",
  salary: "$11",
  address: {
    street: "78",
    country: "KR",
    salary: "$1177",
    zones: {
      z1: "1z",
      z2: "2z",
    },
  },
};

function App() {
  const { name, id, address, salary: employeeSalary } = employee;
  const {
    street,
    country,
    salary: addressSalary,
    zones: { z1, z2 },
  } = address;

  return (
    <div className="App">
      <header className="App-header">
        <h2>{name}</h2>
        <h2>{id}</h2>
        {/* <h2>
          {address.country} {address.street}
        </h2> */}
        <h2>
          {country} {street}
        </h2>
        <h2>{employeeSalary}</h2>
        <h2>{addressSalary}</h2>
        <h2>
          {z1} {z2}
        </h2>
      </header>
    </div>
  );
}

export default App;
