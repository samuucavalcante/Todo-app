import { cn } from "@/lib/utils";
import { Check, ClipboardCheck, Home, ListTodo } from "lucide-react";
import { type ComponentProps } from "react";
import { SidebarLink } from "./sidebar-link";
import { ModeToggle } from "./toggle-theme";
import { Menu } from "@/constants/menu";
import { Logo } from "./logo";
import { UserButton } from "@clerk/nextjs";

type SidebarProps = ComponentProps<"nav"> & {};
export async function Sidebar({ ...props }: SidebarProps) {
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
        <ul className="flex flex-col">
          {Menu.map(({ name, icon: Icon, link }) => (
            <li key={name} className="w-full">
              <SidebarLink href={link}>
                <Icon size={20} />
                <span>{name}</span>
              </SidebarLink>
            </li>
          ))}
        </ul>
        <div className="">
          <UserButton afterSignOutUrl="/" />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
