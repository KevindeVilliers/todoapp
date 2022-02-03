import { useState } from "react";
import { postTodo } from "../Api";

export default function TodoForm() {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setInputDescription(e.target.value);
  };

  const handleChangeDueDate = (e) => {
    setInputDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo(inputName, inputDescription, inputDueDate);
  };

  return (
    <div className="mt-10 w-full">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="bg-gray-600 rounded-full px-2 mt-2 placeholder-black"
          type="text"
          placeholder="Add a todo name"
          name="text"
          required
          onChange={handleChangeName}
        />
        <input
          className="bg-gray-600 rounded-full px-2 mt-2 placeholder-black"
          type="text"
          placeholder="Add a todo description"
          name="text"
          onChange={handleChangeDescription}
        />
        <input
          className="bg-gray-600 rounded-full px-2 mt-2 placeholder-black"
          type="date"
          placeholder="Select a todo due date"
          name="text"
          required
          onChange={handleChangeDueDate}
        />
        <input
          type="submit"
          value="Add to the to do list"
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-2 cursor-pointer mt-2 text-gray-300 font-bold"
        />
      </form>
    </div>
  );
}
