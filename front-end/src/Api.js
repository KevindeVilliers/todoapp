import axios from "axios";

const API_URL = "http://localhost:3001/api";

/**
 * Retourne la liste des todos
 */
export const fetchTodos = async () => {
  return (await axios.get(`${API_URL}/todolist`)).data;
};

/**
 * Post un nouveau todo
 */
export const postTodo = async (inputName, inputDescription, inputDueDate) => {
  return (
    await axios.post(`${API_URL}/todolist`, {
      name: inputName,
      description: inputDescription,
      due_date: inputDueDate,
    })
  ).data;
};

/**
 * Delete un nouveau todo
 */
export const deleteTodo = async (id) => {
  return (await axios.delete(`${API_URL}/todolist/${id}`)).data;
};
