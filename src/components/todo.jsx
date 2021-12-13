import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./todoCard";

function Todo() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div>
      {todos ? (
        <div>
          {todos.slice(0, 9).map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Todo;
