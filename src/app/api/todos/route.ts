import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const { userId } = getAuth(req);
  console.log({userId})
  if(!userId) throw new Error("user not authenticated")

  const tasks = await db.todo.findMany({ where: { userId } })

  return Response.json({ tasks });
}
