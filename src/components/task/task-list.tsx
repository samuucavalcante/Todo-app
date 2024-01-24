"use client";
import {
  Task,
  TaskActions,
  TaskContent,
  TaskFooter,
  TaskIcon,
  TaskSkeleton,
  TaskStatus,
  TaskTitle,
} from "@/components/ui/task";
import { useFetchTodos } from "@/hooks/api/useTodos";
import { FilePenLine, Trash } from "lucide-react";
import { TaskButtonAction } from "./task-button-action";

export function TaskList() {
  const { data: todos, isLoading } = useFetchTodos();

  return (
    <>
      {isLoading &&
        Array.from({ length: 12 }).map((_i, idx) => <TaskSkeleton key={idx} />)}
      {todos?.map(({ id, title, tasks }) => (
        <Task key={id}>
          <TaskTitle>{title}</TaskTitle>
          <TaskContent>
            {tasks?.map((task) => (
              <li key={task?.id}>{task?.title}</li>
            ))}
          </TaskContent>
          <TaskFooter>
            {/* <TaskStatus>{status}</TaskStatus> */}
            <TaskButtonAction />
          </TaskFooter>
        </Task>
      ))}
    </>
  );
}
