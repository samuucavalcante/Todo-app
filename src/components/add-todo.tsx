"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { type ComponentProps } from "react";

type AddTodoProps = ComponentProps<"button"> & {};
export function AddTodo({ ...props }: AddTodoProps) {
  return (
    <button className={cn(props.className, "rounded-full border-2 p-1 border-slate-600 ")} {...props}>
        <Plus className="text-slate-600 font-bold" />
    </button>
  );
}
