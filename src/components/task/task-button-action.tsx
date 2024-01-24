"use client";

import { type ComponentProps } from "react";
import { TaskActions, TaskIcon } from "../ui/task";
import { FilePenLine, Trash } from "lucide-react";

type TaskButtonActionProps = ComponentProps<"div"> & {};
export function TaskButtonAction({ ...props }: TaskButtonActionProps) {
  return (
    <TaskActions>
      <TaskIcon label="Edit">
        <FilePenLine size={20} />
      </TaskIcon>
      <TaskIcon label="Delete">
        <Trash size={20} />
      </TaskIcon>
    </TaskActions>
  );
}
