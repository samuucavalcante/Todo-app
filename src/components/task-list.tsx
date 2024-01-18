"use client";
import {
  Task,
  TaskActions,
  TaskContent,
  TaskFooter,
  TaskIcon,
  TaskStatus,
  TaskTitle
} from "@/components/task";
import { api } from "@/service/api";
import { Todo } from "@prisma/client";
import { FilePenLine, Trash } from "lucide-react";
import { useQuery } from 'react-query';

export function TaskList() {
  const { data, error, isLoading } = useQuery<Todo[]>('', async (url) => {
    const response = await api.get(`http://localhost:3000/api/todos`)
    return response?.data.tasks as Todo[]
  })

  return (
    <>
      {isLoading && "Aguarde"}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>} 
     {data?.map(({ id, title, content, status }, idx) => (
        <Task key={id}>
          <TaskTitle>
            {title} {idx}
          </TaskTitle>
          <TaskContent>{content}</TaskContent>
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
      <Task>
        <TaskContent>
          <span>Escreva Alguma tarefa</span>
        </TaskContent>
      </Task>
    </>
  );
}
