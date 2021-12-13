import React from "react";
import "./todoCard.css";
import { useNavigate } from "react-router-dom";

function TodoCard(props) {
  const { todo } = props;
  const { id, completed } = todo;
  let navigate = useNavigate();

  return (
    <div
      id="item"
      onClick={() => {
        navigate(`/todos/${id}`);
      }}
    >
      <h4>{id}</h4>
      <h5> {`Completed: ${completed}`} </h5>
    </div>
  );
}

export default TodoCard;
