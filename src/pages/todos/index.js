import React, { useEffect, useState } from "react";
import AddTodo from "../../components/addTodo";
import Todo from "../../components/todo";
import "./style.scss";

function Todos() {
  const newTodos = [
    {
      id: 1,
      text: "do dishes",
      done: false
    }, {
      id: 2,
      text: "read a book",
      done: false
    }, {
      id: 3,
      text: "ride bicycle",
      done: false
    }, {
      id: 4,
      text: "do laundry",
      done: false
    }
  ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = sessionStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos(newTodos);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const checkHandler = (todo) => {
    setTodos(prevTodos => (
      prevTodos.map(t => t.id === todo.id ? {...t, done: !t.done} : t)
    ));
  };

  const addTodo = (val) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        done: false,
        text: val
      }
    ]);
  };

  return (
    <div className="p-todos">
      <h1>Todos page:</h1>
      <div className="todoslist">
        {todos.map(t => (
          <Todo
            todo={t}
            key={t.id}
            onCheck={checkHandler}
          />
        ))}
        <AddTodo onAdd={addTodo} />
      </div>
    </div>
  )
}

export { Todos };