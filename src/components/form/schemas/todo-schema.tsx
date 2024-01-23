import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Caracteres insuficiente (min: 3)." })
    .max(30, { message: "Número de caracteres excedido (max: 30)." }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  tasks: z.array(
    z.object({
      id: z.string(),
      index: z.number(),
      todoId: z.string(),
      title: z
        .string()
        .min(3, { message: "Caracteres insuficiente (min: 3)." })
        .max(30, { message: "Número de caracteres excedido (max: 30)." }),
      completed: z.boolean(),
    })
  ),
});

export type FormTodo = z.infer<typeof todoSchema>;
