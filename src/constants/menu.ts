import { Check, ClipboardCheck, Home, ListTodo } from "lucide-react";

export const Menu = [
    { name: "All tasks", icon: Home, link: "/" },
    { name: "Important!", icon: ListTodo, link: "/important" },
    { name: "Completed!", icon: Check, link: "/completed" },
    { name: "Do It Now", icon: ClipboardCheck, link: "/do-it-now" },
  ];