import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "@/lib/prisma";

export const intialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.user.findUnique({
    where: {
      id: user.id
    }
  })

  if (profile) {
    return profile
  }

  const newProfile = await db.user.create({
    data: {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newProfile;
}