import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "@/lib/prisma";
import { User } from "@prisma/client";

export const intialProfile = async (): Promise<User> => {
  const response = await fetch(`${process.env.API_URL || process.env.VERCEL_URL}/api/me`)

  const data = await response.json()

  return data.user as User
}