import { auth } from "@clerk/nextjs";

import { db } from "@/lib/prisma";

export const currentProfile = async () => {
  const { userId } = auth();
  if (!userId) return null;

  const profile = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  return profile;
};
