import "./TodoItem.css";

import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodoStatus: (id: number) => void;
}

function TodoItem({
  todo,
  deleteTodo,
  toggleTodoStatus,
}: TodoItemProps) {

  function handleDeleteClick() {
    deleteTodo(todo.id);
  }

  function handleCheckboxChange() {
    toggleTodoStatus(todo.id);
  }

  return (
    <div className="todo-item">

      <div className="todo-content">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />

        <span
          className={
            todo.completed ? "completed" : ""
          }
        >
          {todo.task}
        </span>

      </div>

      <button
        onClick={handleDeleteClick}
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;