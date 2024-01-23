import { createTodo, getAllTodos } from "@/service/todo";
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

  const createTodoLocal = async (todo: Omit<Todo, "userId">) => {
    return await create.mutateAsync(todo);
  };

  return { create: createTodoLocal };
}

export function useFetchTodos() {
  const query = useQuery({ queryKey: KEY, queryFn: getAllTodos });

  return query;
}
