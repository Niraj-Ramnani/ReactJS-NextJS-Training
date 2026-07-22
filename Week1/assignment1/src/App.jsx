import { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const addTodo = (task) => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <div className="todo-card">
        <Header />

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />

        <Footer todos={todos} />
      </div>
    </div>
  );
}

export default App;