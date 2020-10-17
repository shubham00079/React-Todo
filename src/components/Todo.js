import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const DeleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={DeleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
