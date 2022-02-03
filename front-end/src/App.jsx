import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-900">
      <div className="flex flex-col items-center w-1/2 mx-auto">
        <h1 className="text-3xl font-bold mt-24">ToDoIst</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
