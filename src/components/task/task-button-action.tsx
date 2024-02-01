"use client";

import { type ComponentProps } from "react";
import { TaskActions, TaskIcon } from "../ui/task";
import { FilePenLine, Trash } from "lucide-react";
import { StoreTodo } from "../store-todo";

type TaskButtonActionProps = {
  todoId: string;
};
export function TaskButtonAction({ todoId }: TaskButtonActionProps) {
  return (
    <>
      <TaskActions>
        <StoreTodo
          todoId={todoId}
          triggerComponent={
            <TaskIcon label="Editar">
              <FilePenLine size={16} />
            </TaskIcon>
          }
        />
        <TaskIcon label="Apagar">
          <Trash size={16} />
        </TaskIcon>
      </TaskActions>
    </>
  );
}
