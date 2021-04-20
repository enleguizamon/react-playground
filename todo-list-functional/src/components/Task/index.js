import { useState } from "react";

function Task(props) {
  function handleClick() {
    const { name, handleCallback } = props;

    if (handleCallback) {
      handleCallback(name);
    }
  }

  return (
    <li
      style={props.isCompleted ? { color: "green", textDecorationLine: 'line-through' } : { color: "black" }}
      onClick={handleClick}
    >
      {props.name}
    </li>
  );
}

export default Task;
