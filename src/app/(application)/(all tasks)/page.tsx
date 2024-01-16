import {
  Task,
  TaskActions,
  TaskContent,
  TaskFooter,
  TaskIcon,
  TaskStatus,
  TaskTitle,
} from "@/components/task";
import { FilePenLine, Trash } from "lucide-react";

const AllTasks = [
  { id: 1, title: "Teste", content: "Content", status: "status" },
  { id: 2, title: "Teste", content: "Content", status: "status" },
  { id: 3, title: "Teste", content: "Content", status: "status" },
  { id: 4, title: "Teste", content: "Content", status: "status" },
  { id: 5, title: "Teste", content: "Content", status: "status" },
  { id: 6, title: "Teste", content: "Content", status: "status" },
  { id: 7, title: "Teste", content: "Content", status: "status" },
  { id: 8, title: "Teste", content: "Content", status: "status" },
  { id: 9, title: "Teste", content: "Content", status: "status" },
  { id: 10, title: "Teste", content: "Content", status: "status" },
  { id: 11, title: "Teste", content: "Content", status: "status" },
  { id: 12, title: "Teste", content: "Content", status: "status" },
  { id: 13, title: "Teste", content: "Content", status: "status" },
];

type AllTasksPageProps = {};
export default function AllTasksPage({}: AllTasksPageProps) {
  return AllTasks.map(({ id, title, content, status }, idx) => (
    <Task key={id}>
      <TaskTitle>{title} {idx}</TaskTitle>
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
  ));
}
