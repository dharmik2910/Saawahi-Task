import api from "./api";

export const getTasks = () => {
  return api.get("/tasks");
};

export const createTask = (data: unknown) => {
  return api.post("/tasks", data);
};

export const updateTask = (id: string, data: unknown) => {
  return api.put(`/tasks/${id}`, data);
};

export const deleteTask = (id: string) => {
  return api.delete(`/tasks/${id}`);
};