import { db } from "@/lib/prisma";
import { Todo } from "@/service/todo.dto";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export async function GET(req: Request) {
  const { userId } = getAuth(req as any);
  if (!userId) throw new Error("user not authenticated");

  const tasks = await db.todo.findMany({ where: { userId } });

  return Response.json({ tasks });
}

export async function POST(req: Request) {
  const { userId } = getAuth(req as any);
  const { todo: todoBody } = (await req.json()) as { todo: Todo };
  if (!userId) throw new Error("user not authenticated");

  const todo = await db.todo.create({
    data: {
      userId,
      title: todoBody.title,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: todoBody.id,
    },
  });

  await Promise.all(
    todoBody.tasks.map((todoMap) =>
      db.task.create({
        data: {
          ...todoMap,
          todoId: todo.id,
        },
      })
    )
  );

  return Response.json({ todo });
}
