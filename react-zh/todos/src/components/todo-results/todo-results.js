import { useTodos } from "../../todo-context";
import "./todo-results.css";

export const TodoResults = () => {
  const { todos, setTodos } = useTodos();

  const calculateChecked = () => {
    let counter = 0;
    todos.forEach((todo) => {
      if(todo.checked) {
        counter++;
      }
    })
    return counter;
  };

  return (
    <div className="todo-results">
      Készen:
      {calculateChecked()}
    </div>
  );
};
