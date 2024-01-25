"use client";
import {
  Task,
  TaskContent,
  TaskFooter,
  TaskSkeleton,
  TaskTitle
} from "@/components/ui/task";
import { useFetchTodos } from "@/hooks/api/useTodos";
import { TaskButtonAction } from "./task-button-action";
import { sortByProperty } from "@/utils/array";

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
            {sortByProperty(tasks, 'index')?.map((task) => (
              <li key={task?.id}>{task?.title}</li>
            ))}
          </TaskContent>
          <TaskFooter>
            {/* <TaskStatus>{status}</TaskStatus> */}
            <TaskButtonAction todoId={id} />
          </TaskFooter>
        </Task>
      ))}
    </>
  );
}
