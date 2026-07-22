import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

import type { Todo } from "./types/todo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTodo(task: string) {
    const newTodo: Todo = {
      id: Date.now(),
      task,
      completed: false,
    };

    setTodoList((previousTodoList) => [
      ...previousTodoList,
      newTodo,
    ]);
  }

  function deleteTodo(id: number) {
    setTodoList((previousTodoList) =>
      previousTodoList.filter((todo) => todo.id !== id)
    );
  }

  function toggleTodoStatus(id: number) {
    setTodoList((previousTodoList) =>
      previousTodoList.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }
  const completedTasks = todoList.filter(
  (todo) => todo.completed
).length;

const pendingTasks = todoList.length - completedTasks;

  return (
    <div className="app">
      <Header
        title="Todo List Made in Training "
        subtitle="This Manages your daily tasks"
      />

      <TodoForm
        addTodo={addTodo}
        placeholder="Enter your task"
        buttonText="Add"
      />

      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
        
      <Footer
        totalTasks={todoList.length}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
      />
    </div>
  );
}

export default App;