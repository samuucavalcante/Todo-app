import { intialProfile } from "@/lib/initial-profile";
import Image from "next/image";
import { redirect } from "next/navigation";
import { type ComponentProps } from "react";

type SidebarProfileProps = ComponentProps<"div"> & {};
export async function SidebarProfile({ ...props }: SidebarProfileProps) {
  const user = await intialProfile();

  if (!user.id) redirect("/sign-in");
  return (
    <>
      <Image
        className="rounded-full"
        src={user?.imageUrl ?? ""}
        alt={user?.name ?? ""}
        width={40}
        height={40}
      />
      <div className="inline-block">
        <h5 className="text-md text-slate-300 text-start">{user?.name}</h5>
        <p className="text-sm text-slate-400">{user?.email}</p>
      </div>
    </>
  );
}
