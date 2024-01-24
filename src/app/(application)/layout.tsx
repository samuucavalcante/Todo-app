import { AddTodo } from "@/components/add-todo";
import { Logo } from "@/components/logo";
import { MenuCurrent } from "@/components/menu/menu-current";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Menu, User } from "lucide-react";
import { Suspense, type PropsWithChildren } from "react";

type LayoutApplicationProps = PropsWithChildren;
export default async function LayoutApplication({
  children,
}: LayoutApplicationProps) {
  return (
    <div className="relative w-[calc(100vw-2rem)]">
      <div className="absolute z-30 right-0 -top-10 block md:hidden">
        <User />
      </div>
      <div className="absolute z-30  translate-x-1/2 right-[50%]  -top-12 block md:hidden">
        <Logo />
      </div>
      <div className="absolute z-30 -top-10 left-0 block md:hidden">
        <Menu />
      </div>
      <Suspense
        fallback={
          <Skeleton className="bg-[#09090B] hidden md:flex fixed mt-4 ml-4 h-[calc(100vh-64px)] min-w-[300px] border-2 border-gray-500/80  rounded-md shadow-lg flex-col py-4 justify-end" />
        }
      >
        <Sidebar />
      </Suspense>
      <div className="relative top-4 h-[calc(100vh-6rem)] md:overflow-auto ml-0 md:ml-[21rem] w-[calc(100vw-2rem)]  min-ml py-6 px-6 mt-14 md:mt-4 shadow-md border border-white/10 bg-[#09090B] rounded-md md:w-[calc(100vw-24rem)] md:h-[calc(100vh-64px)] ">
        <div className="fixed z-10 h-[5rem] top-24 md:top-[3.1rem] bg-[#09090B] flex md:w-[calc(100vw-28rem)] w-[calc(100vw-6rem)] justify-between flex-row items-center">
          <div>
            <h3 className="text-2xl font-bold">
              <MenuCurrent />
            </h3>
            <div className="absolute h-0.5 w-8 rounded-md bg-white" />
          </div>
          <AddTodo />
        </div>
        <div className="relative grid w-full h-[calc(100vh-15rem)] overflow-y-scroll pr-3 md:pr-0 md:overflow-hidden md:h-auto top-24 md:top-16 gap-4 grid-cols-1 pb-4 lg:grid-cols-2 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </div>
  );
}
