"use client";
import {
  Task,
  TaskContent,
  TaskFooter,
  TaskSkeleton,
  TaskTitle,
} from "@/components/ui/task";
import { useFetchTodos } from "@/hooks/api/useTodos";
import { Task as TaskDto } from "@/service/todo.dto";
import { sortByProperty } from "@/utils/array";
import { AlertCircle, Check } from "lucide-react";
import { ProgressCircle } from "../progress-circle";
import { TaskButtonAction } from "./task-button-action";



export function TaskList() {
  const { data: todos, isLoading } = useFetchTodos();

  const handleProgress = (tasks: TaskDto[]) => {
    const completed = tasks.filter(task => task.completed)
    const progress = (completed.length /tasks.length ) * 100
    const format = Math.round(progress) 

    return format || 0
  }

  return (
    <>
      {isLoading &&
        Array.from({ length: 12 }).map((_i, idx) => <TaskSkeleton key={idx} />)}
      {todos?.map(({ id, title, tasks }) => (
        <Task key={id}>
          <TaskTitle>{title}</TaskTitle>
          <TaskContent className="h-32 overflow-auto">
            <ul>
              {sortByProperty(tasks, "index")?.map((task) => (
                <li className="w-full flex items-center gap-2 text-gray-500/50" key={task?.id}>
                  {task.completed ? <Check className="text-green-500 w-4 h-4" /> : <AlertCircle className="text-yellow-500 w-4 h-4" />}
                  {task?.title}
                </li>
              ))}
            </ul>
          </TaskContent>
          <TaskFooter className="flex mt-2 items-center justify-between">
            <ProgressCircle className="w-[30%]" value={handleProgress(tasks)} />
            <TaskButtonAction todoId={id} />
          </TaskFooter>
        </Task>
      ))}
    </>
  );
}
