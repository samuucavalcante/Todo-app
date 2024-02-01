import { db } from "@/lib/prisma";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export async function GET(req: Request) {
  const user = await currentUser();

  if (!user) {
    return Response.json({ user: null });
  }

  const profile = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (profile) {
    return Response.json({ user: profile });
  }

  const newProfile = await db.user.create({
    data: {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  Response.json({ user: newProfile });
}
