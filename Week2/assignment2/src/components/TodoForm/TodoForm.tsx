import "./TodoForm.css";
import useTodoForm from "./useTodoForm";

interface TodoFormProps {
  addTodo: (task: string) => void;
  placeholder: string;
  buttonText: string;
}

function TodoForm({
  addTodo,
  placeholder,
  buttonText,
}: TodoFormProps) {
  const {
    task,
    handleInputChange,
    handleFormSubmit,
  } = useTodoForm({ addTodo });

  return (
    <form
      className="todo-form"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={task}
        onChange={handleInputChange}
      />

      <button type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export default TodoForm;