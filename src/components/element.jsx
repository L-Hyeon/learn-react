import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

function Element() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setDetail(res.data);
      });
  }, []);

  const { id: todoId, userId, title, completed } = detail || {};
  console.log(title);
  return (
    <div>
      {detail ? (
        <div>
          <h4>{todoId}</h4>
          <h4>{userId}</h4>
          <h4>{title}</h4>
          <h5>{completed}</h5>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Element;
