import React, { useState } from "react";
import "./App.css";
import Form from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Practice</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />

        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
