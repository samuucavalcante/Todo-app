import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { Todo } from "@prisma/client";

export const getAllTodos = async (): Promise<Todo[]> => {
  const userId = auth().userId;

  return userId ? await db.todo.findMany({ where: { userId } }) : [];
};

export const createTodo = async (todo: Partial<Todo>) => {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    body: JSON.stringify({ todo }),
  });

  const data = await response.json()
  return data
};
