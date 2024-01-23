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
} from "@/components/task";
import { useFetchTodos } from "@/hooks/api/useTodos";
import { FilePenLine, Trash } from "lucide-react";

export function TaskList() {
  const { data: todos, isLoading } = useFetchTodos();

  return (
    <>
      {isLoading &&
        Array.from({ length: 12 }).map((_i, idx) => <TaskSkeleton key={idx} />)}
      {todos?.map(({ id, title, tasks }, idx) => (
        <Task key={id}>
          <TaskTitle>
            {title}
          </TaskTitle>
          <TaskContent>
            {tasks?.map((task) => (
              <li key={task?.id}>{task?.title}</li>
            ))}
          </TaskContent>
          <TaskFooter>
            <TaskStatus>{status}</TaskStatus>
            <TaskActions>
              <TaskIcon label="Edit">
                <FilePenLine size={20} />
              </TaskIcon>
              <TaskIcon label="Delete">
                <Trash size={20} />
              </TaskIcon>
            </TaskActions>
          </TaskFooter>
        </Task>
      ))}
    </>
  );
}
