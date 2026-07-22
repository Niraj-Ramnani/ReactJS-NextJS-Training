function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-item">
      <div className="task">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;