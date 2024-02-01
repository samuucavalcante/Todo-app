import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type SetupPageProps = {};
export default function SetupPage({}: SetupPageProps) {
  if (auth().userId) redirect("/all");
  if (!auth().userId) redirect("/sign-in");

  return null;
}
