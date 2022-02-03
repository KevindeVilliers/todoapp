import TodoForm from "./TodoForm";
import { useState, useEffect } from "react";
import { fetchTodos } from "../Api";

export default function TodoList() {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then((todos) => setTodos(todos))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  console.log(todos);

  return (
    <div className="bg-gray-400 w-full flex flex-col rounded-3xl mt-10">
      {loading ? (
        <p>Chargement en cours</p>
      ) : (
        <>
          {todos.map((todo) => (
            <div>
              <p
                className="bg-gray-600 rounded-full p-4 my-4 w-full"
                key={todo.id}
              >
                {todo.id} - {todo.description}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
