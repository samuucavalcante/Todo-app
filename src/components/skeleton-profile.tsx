import { type ComponentProps } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

type SkeletonProfileProps = ComponentProps<"div"> & {};
export function SkeletonProfile({...props}: SkeletonProfileProps) {
  return (
    <div className={cn("w-full gap-2 flex items-center", props.className)}>
      <div>
        <Skeleton className="rounded-full  flex-1 w-10 h-10" />
      </div>
      <div className=" flex w-full flex-col gap-2">
        <Skeleton className="w-2/4 h-4 rounded-none" />
        <Skeleton className="w-3/4 h-4 rounded-none" />
      </div>
    </div>
  );
}
