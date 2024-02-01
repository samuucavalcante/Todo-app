import { db } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  const userId = getAuth(req as any).userId;
  console.log({userId1: userId})

  if (!userId) {
    return Response.json({ user: null });
  }

  const profile = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  console.log({ profile })
  if (profile) {
    return Response.json({ user: profile });
  }


  Response.json({ user: null });
}

export async function POST(req: Request) {
  const { user } = await req.json();

  const newProfile = await db.user.create({
    data: {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return Response.json({ user: newProfile });
}
