import React from "react";

function Todo({todo, onCheck}) {
  return (
    <>
      <input type="checkbox" defaultChecked={todo.done} onClick={() => onCheck(todo)}/>
      <span>{todo.text}</span>
    </>
  )
}

export default Todo;