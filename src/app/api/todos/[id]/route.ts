import { db } from "@/lib/prisma";
import { Todo } from "@/service/todo.dto";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = getAuth(req as any);
  if (!userId) throw new Error("user not authenticated");

  const todo = await db.todo.findFirst({
    where: { userId, id: params.id },
    select: {
      id: true,
      tasks: true,
      title: true,
    },
  });

  return Response.json({ todo });
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = getAuth(req as any);
  if (!userId) throw new Error("user not authenticated");
  const { todo: todoBody } = (await req.json()) as { todo: Todo };

  const requestTasks = todoBody.tasks;
  const upsertPromises = requestTasks.map((task) =>
    db.task.upsert({
      where: { id: task.id, todoId: params.id },
      create: {
        id: task.id,
        completed: task.completed,
        todoId: params.id,
        index: task.index,
        title: task.title,
      },
      update: task,
    })
  );

  await Promise.all(upsertPromises);

  const todo = await db.todo.update({
    where: { userId, id: params.id },
    data: {
      title: todoBody.title,
    },
    select: {
      id: true,
      title: true,
      tasks: true,
    }
  });

  return Response.json({ todo });
}
