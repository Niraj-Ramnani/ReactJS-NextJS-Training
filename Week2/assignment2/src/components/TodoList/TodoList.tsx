import "./TodoList.css";

import TodoItem from "../TodoItem/TodoItem";
import type { Todo } from "../../types/todo";

interface TodoListProps {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodoStatus: (id: number) => void;
}

function TodoList({
  todoList,
  deleteTodo,
  toggleTodoStatus,
}: TodoListProps) {
  if (todoList.length === 0) {
    return (
      <div className="empty-message">
        No tasks added yet.
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      ))}
    </div>
  );
}

export default TodoList;