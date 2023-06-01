import { Checkbox } from "../checkbox/checkbox";
import { useTodos } from "../../todo-context";
import "./todo-list.css";

export const TodoList = () => {
  const { todos, setTodos } = useTodos();

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        return {...todo, checked: !todo.checked};
      } else {
        return {...todo};
      }
    }))
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Teendők:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Úgy látszik, ma nincs semmi dolgod :)</div>
      )}
    </div>
  );
};
