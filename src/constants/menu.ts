import { Check, ClipboardCheck, Home, ListTodo } from "lucide-react";

export const Menu = [
    { name: "Tarefas", icon: Home, link: "/" },
    { name: "Importantes!", icon: ListTodo, link: "/important" },
    { name: "Completadas", icon: Check, link: "/completed" },
    { name: "Fazer isso agora!", icon: ClipboardCheck, link: "/do-it-now" },
  ];