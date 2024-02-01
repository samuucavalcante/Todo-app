import { createTodo, getAllTodos, getTodo, updateTodo } from "@/service/todo";
import { Todo } from "@/service/todo.dto";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const KEY = ["todos"];

export function useTodos() {
  const clientQuery = useQueryClient();

  const create = useMutation({
    mutationFn: createTodo,
    mutationKey: KEY,
    onSuccess: (data) => {
      const prevData = clientQuery.getQueryData<Todo[]>(KEY) as Todo[];
      clientQuery.setQueryData<Todo[]>(KEY, [data, ...prevData]);
    },
  });

  const get = useMutation({
    mutationFn: getTodo,
    mutationKey: KEY,
  });

  const update = useMutation({
    mutationFn: updateTodo,
    mutationKey: KEY,
    onSuccess: (data) => {
      const prevData = clientQuery.getQueryData<Todo[]>(KEY) as Todo[];
      const dataUpdated = prevData.map(prev => prev.id === data.id ? ({...prev, ...data}) : prev)
      clientQuery.setQueryData<Todo[]>(KEY, dataUpdated);
    },
  });

  const createTodoLocal = async (todo: Todo) => {
    return await create.mutateAsync(todo);
  };

  const updateTodoLocal = async (todo: Todo) => {
    return await update.mutateAsync(todo);
  };

  const getTodoLocal = async (todoId: string) => {
    return await get.mutateAsync(todoId);
  };

  return {
    create: createTodoLocal,
    update: updateTodoLocal,
    get: getTodoLocal,
  };
}

export function useFetchTodos() {
  const query = useQuery({ queryKey: KEY, queryFn: getAllTodos });

  return query;
}
