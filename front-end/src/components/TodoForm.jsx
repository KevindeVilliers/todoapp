import e from "express";
import { useState } from "react";
import { postTodo } from "../Api";

export default function TodoForm() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (input) => {
    alert("tes la");
    console.log(input);
    postTodo(input);
  };

  return (
    <div className="w-full  mt-10">
      <form
        className="w-full flex flex-row justify-between"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-gray-600 rounded-full px-2"
          type="text"
          placeholder="Add a todo"
          name="text"
          onChange={handleChange}
        />
        <input
          type="submit"
          value=" Add to the to do list"
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-2"
        />
      </form>
    </div>
  );
}
