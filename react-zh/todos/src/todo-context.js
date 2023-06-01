import { createContext, useContext, useState } from "react";

function useTodoService(value) {
  const [todos, setTodos] = useState(value);

  return { todos, setTodos };
}

export const TodosContext = createContext({});

export default function TodoContextProvider({children, value}) {
  const context = useTodoService(value);
  return (
    <TodosContext.Provider value={ context } children={ children }>
    </TodosContext.Provider>
  );
}

export const useTodos = () => {
  const context = useContext(TodosContext);
  if(!context) {
    throw new Error("No todo context!");
  }
  return context;
}


