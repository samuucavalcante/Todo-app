import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Skeleton } from "./ui/skeleton";

{
  /* <TaskRoot>
      <TaskTitle skTitle>{title}</TaskTitle>
      <TaskContent>{content}</TaskContent>
      <TaskFooter>
          <TaskStatus>
              {status}
          </TaskStatus>
          <TaskActions>
              <TaskIcon>{icon}</TaskIcon>
              <TaskIcon>{icon}</TaskIcon>
          </TaskActions>
      </TaskFooter>
  </TaskRoot> */
}

type TaskProps = ComponentProps<"div"> & {};
export function Task({ ...props }: TaskProps) {
  return (
    <div
      className={cn(
        props.className,
        "border-1 items-stretch border-slate-800 h-44 flex flex-col bg-[#333233] p-2 rounded-md"
      )}
      {...props}
    />
  );
}

type TaskTitleProps = ComponentProps<"h2"> & {};
export function TaskTitle({ ...props }: TaskTitleProps) {
  return (
    <h2 className={cn(props.className, "text-xl font-semibold")} {...props} />
  );
}

type TaskContentProps = ComponentProps<"div"> & {};
export function TaskContent({ ...props }: TaskContentProps) {
  return <div className={cn(props.className, "text-white/50")} {...props} />;
}

type TaskFooterProps = ComponentProps<"div"> & {};
export function TaskFooter({ ...props }: TaskFooterProps) {
  return (
    <div
      className={cn(props.className, "mt-auto flex justify-between")}
      {...props}
    />
  );
}
type TaskActionsProps = ComponentProps<"div"> & {};
export function TaskActions({ ...props }: TaskActionsProps) {
  return (
    <div className={cn(props.className, "flex flex-row gap-2")} {...props} />
  );
}
type TaskIconProps = ComponentProps<"div"> & {
  label?: string;
};
export function TaskIcon({ ...props }: TaskIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              props.className,
              "text-[#b7bdc8] text-sm cursor-pointer"
            )}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent>{props.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

type TaskStatusProps = ComponentProps<"div"> & {};
export function TaskStatus({ ...props }: TaskStatusProps) {
  return (
    <div
      className={cn(props.className, "mt-auto flex justify-between")}
      {...props}
    />
  );
}

type TaskSkeletonProps = ComponentProps<"div"> & {};
export function TaskSkeleton({ ...props }: TaskSkeletonProps) {
  return (
    <Task className="border-2 flex flex-col border-[#333333] gap-2 p-2" {...props}>
      <TaskTitle className="">
        <Skeleton className="w-3/4 h-6" />
      </TaskTitle>
      <TaskContent>
        <Skeleton className="w-full h-24" />
      </TaskContent>
      <TaskFooter>
        <Skeleton className="w-full h-6" />
      </TaskFooter>
    </Task>
  );
}
