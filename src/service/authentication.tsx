"use server";
import {
  redirectToSignIn,
  auth,
  currentUser as currentUserClerk,
} from "@clerk/nextjs";

import { db } from "@/lib/prisma";

