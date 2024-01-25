import { api } from "./api";
import { Todo } from "@/service/todo.dto";

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await api.get(`api/todos`);
  return response?.data.todos as Todo[];
};

export const getTodo = async (todoId: string): Promise<Todo> => {
  const response = await api.get(`api/todos/${todoId}`);
  return response?.data.todo as Todo;
};

export const createTodo = async (data: Todo): Promise<Todo> => {
  const response = await api.post(`api/todos`, { todo: data });
  return response?.data.todo as Todo;
};

export const updateTodo = async (data: Todo): Promise<Todo> => {
  const response = await api.patch(`api/todos/${data.id}`, { todo: data });
  return response?.data.todo as Todo;
};

export const deleteTodo = async (data: Todo): Promise<Todo> => {
  const response = await api.delete(`api/todos/${data.id}`);
  return response?.data.todo as Todo;
};
