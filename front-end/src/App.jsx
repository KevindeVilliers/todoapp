import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { useState, useEffect } from "react";
import { fetchTodos } from "./Api";

const App = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetchTodos()
      .then((todos) => setTodos(todos))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  console.log(todos);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-900">
      <div className="flex flex-col items-center w-1/2 mx-auto">
        <h1 className="text-3xl font-bold mt-24">ToDoIst</h1>
        {loading ? (
          <p>Chargement en cours</p>
        ) : (
          <>
            <TodoForm fetchData={fetchData}/>
            <TodoList todos={todos} fetchData={fetchData} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
