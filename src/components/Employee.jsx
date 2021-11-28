import React from "react";

function Employee(props) {
  return (
    <div>
      <h3>
        Employee: {props.firstname} {props.lastname} ({props.age})
      </h3>
    </div>
  );
}

export default Employee;
