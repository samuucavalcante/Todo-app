import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "@/lib/prisma";
import { PrismaClient, User } from "@prisma/client/edge";

export const intialProfile = async (): Promise<User> => {
  const user = await currentUser();

  const dataDB = db ? db : new PrismaClient()

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await dataDB.user.findUnique({
    where: {
      id: user.id
    }
  })

  if (profile) {
    return profile
  }

  const newProfile = await dataDB.user.create({
    data: {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newProfile;
}