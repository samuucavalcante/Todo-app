import { cn } from "@/lib/utils";
import { Suspense, type ComponentProps } from "react";
import { Logo } from "./logo";
import { MenuList } from "./menu-list";
import { SidebarProfile } from "./sidebar-profile";
import { SidebarProfileActions } from "./sidebar-profile-actions";
import { SkeletonProfile } from "./skeleton-profile";

type SidebarProps = ComponentProps<"nav"> & {};
export async function Sidebar({ ...props }: SidebarProps) {

  return (
    <nav
      className={cn(
        props.className,
        "bg-[#09090B] hidden md:flex fixed mt-4 ml-4 h-[calc(100vh-64px)] min-w-[300px] border border-white/5  rounded-md shadow-lg flex-col py-4 justify-end"
      )}
      {...props}
    >
      <div className="absolute top-6 right-[50%] w-full translate-x-1/2">
        <Suspense fallback="Aguarde">
          <Logo />
        </Suspense>
      </div>
      <div className="flex flex-col h-[60%] justify-between ">
        <Suspense fallback="Aguarde">
          <MenuList />
        </Suspense>
        <SidebarProfileActions>
          <Suspense fallback={<SkeletonProfile className="mx-2" />}>
            <SidebarProfile />
          </Suspense>
        </SidebarProfileActions>
      </div>
    </nav>
  );
}
