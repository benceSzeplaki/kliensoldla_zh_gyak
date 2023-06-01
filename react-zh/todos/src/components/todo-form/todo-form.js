import { useState } from "react";
import { useTodos } from "../../todo-context";
import "./todo-form.css";

export const TodoForm = () => {
  const { todos, setTodos } = useTodos();
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    let newTodo = {
      id: todos.length + 1,
      label: task,
      checked: false,
    }
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }

  };

  return (
    <div className="todo-form">
      <input
        placeholder="Új teendő"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Teendő hozzáadása
      </button>
    </div>
  );
};
