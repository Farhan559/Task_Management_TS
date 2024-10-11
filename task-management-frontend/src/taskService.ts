// src/services/taskService.ts

import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Change to your backend URL

// Define the Task interface to specify the structure of a task
interface Task {
  title: string;
  description: string;
  completed?: boolean;  // Optional if it's not always provided
}

export const getAllTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: Task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id: string, task: Task) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};
