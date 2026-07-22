import { useState } from "react";

interface UseTodoFormProps {
  addTodo: (task: string) => void;
}

function useTodoForm({ addTodo }: UseTodoFormProps) {
  const [task, setTask] = useState("");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setTask(event.target.value);
  }

  function handleFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    addTodo(task);

    setTask("");
  }

  return {
    task,
    handleInputChange,
    handleFormSubmit,
  };
}

export default useTodoForm;