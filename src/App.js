import React from "react";
import Employee from "./components/Employee";

function App() {
  const employeeInfo = [
    {
      firstname: "Nick",
      lastname: "Decker",
      age: "22",
      id: "1",
    },
    {
      firstname: "Seok-Hyun",
      lastname: "Lee",
      age: "22",
      id: "2",
    },
    {
      firstname: "John",
      lastname: "Doe",
      age: "27",
      id: "3",
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      age: "26",
      id: "4",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* map == for each문, BUT 뭔가를 반환함 */}
        {employeeInfo.map((e) => {
          return (
            // <Employee
            //   firstname={e.firstname}
            //   lastname={e.lastname}
            //   age={e.age}
            // />
            <Employee key={e.id} {...e} />
          );
        })}
        {/* <Employee firstname="Jack" lastname="Smith" age="21" />
        <Employee firstname="Stephanie" lastname="A" age="24" />
        <Employee firstname="Lee" lastname="B" age="25" />
        <Employee firstname="George" lastname="C" age="43" />
        <Employee firstname="Nick" lastname="D" age="45" /> */}
      </header>
    </div>
  );
}

export default App;
