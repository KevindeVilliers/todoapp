import checked from "../assets/checked.png";
import { deleteTodo } from "../Api";
import { useState } from "react";

export default function TodoList(todos, fetchData) {
  const handleChecked = async (id) => {
    await deleteTodo(id);
    fetchData();
  };

  console.log(`from todolist ${JSON.stringify(todos)}`);
  return (
    <div className="bg-gray-400 w-full flex flex-col rounded-3xl mt-10">
      {/* {todos.map((todo) => (
        <div className="bg-gray-600 rounded-full p-4 my-4 w-full" key={todo.id}>
          <p className="text-lg font-bold pl-4">
            {todo.id} - {todo.name}
          </p>
          <p className="pl-4 w-full flex justify-between">
            {todo.description}
            <img
              src={checked}
              className="w-8 cursor-pointer"
              onClick={() => {
                handleChecked(todo.id);
              }}
            />
          </p>
          <p className="pl-4">{`Due date : ${todo.due_date.slice(0, 10)}`}</p>
        </div>
      ))} */}
    </div>
  );
}
