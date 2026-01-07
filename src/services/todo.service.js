import axios from "axios";

const BASE_URL = "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents";

export const fetchTodos = (userId) =>
  axios.get(`${BASE_URL}/todos?userId=${userId}`);

export const createTodo = (todo) =>
  axios.post(`${BASE_URL}/todos`, todo);

export const updateTodo = (id, data) =>
  axios.patch(`${BASE_URL}/todos/${id}`, data);

export const deleteTodo = (id) =>
  axios.delete(`${BASE_URL}/todos/${id}`);
