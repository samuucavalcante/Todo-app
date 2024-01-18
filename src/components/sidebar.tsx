import { intialProfile } from "@/lib/initial-profile";
import { cn } from "@/lib/utils";
import { Suspense, type ComponentProps } from "react";
import { Logo } from "./logo";
import { MenuList } from "./menu-list";
import { SidebarProfileActions } from "./sidebar-profile-actions";
import Image from "next/image";

type SidebarProps = ComponentProps<"nav"> & {};
export async function Sidebar({ ...props }: SidebarProps) {
  const user = await intialProfile();

  return (
    <nav
      className={cn(
        props.className,
        "bg-[#212022] hidden md:flex fixed mt-4 ml-4 h-[calc(100vh-64px)] min-w-[300px] border-2 border-gray-500/80  rounded-md shadow-lg flex-col py-4 justify-end"
      )}
      {...props}
    >
      <div className="absolute top-6 right-[50%] w-full translate-x-1/2">
        <Logo />
      </div>
      <div className="flex flex-col h-[60%] justify-between ">
        <MenuList />
        <SidebarProfileActions>
          <Image
          className="rounded-full"
          src={user?.imageUrl ?? ""}
          alt={user?.name ?? ""}
          width={40}
          height={40}
          />
          <span className="inline-block">
          <h5 className="text-md text-slate-300 text-start">{user?.name}</h5>
          <p className="text-sm text-slate-400">{user?.email}</p>
        </span>
        </SidebarProfileActions>
      </div>
    </nav>
  );
}
