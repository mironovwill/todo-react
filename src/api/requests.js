import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers = {
  'Content-Type': 'application/json'
};

export const getTasks = async () => {
  try {
    return await axios.get('/tasks').then((res) => res.data);
  } catch (e) {
    throw new Error(e);
  }
};

export const createTask = async (task) => {
  try {
    return await axios.post('/tasks', {
      title: task
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteTask = async (id) => {
  try {
    return await axios.delete(`/tasks/${id}`);
  } catch (e) {
    throw new Error(e);
  }
};

export const completeTask = async (id) => {
  try {
    return await axios.put(`/tasks/${id}`, {
      done: true
    });
  } catch (error) {
    throw new Error(e);
  }
};
