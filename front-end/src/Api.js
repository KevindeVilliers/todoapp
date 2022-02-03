import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

/**
 * Retourne la liste des todos
 */
export const fetchTodos = async () => {
  return (await axios.get(`${API_URL}/todolist`)).data;
};

/**
 * Post un nouveau todo
 */
export const postTodo = async (input) => {
  return (await axios.post(`${API_URL}/api/todolist`), input).data;
};
