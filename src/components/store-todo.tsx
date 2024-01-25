"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { type ReactNode, useRef } from "react";
import { FormTodo } from "./form/form-todo/form-todo";
import { FormTodoTitleInput } from "./form/form-todo/form-todo-title-input";
import { Button } from "./ui/button";

type StoreTodoProps = {
  triggerComponent: ReactNode
  todoId?: string
}

export function StoreTodo({ triggerComponent, todoId }: StoreTodoProps) {
  const buttonCloseRef = useRef<HTMLButtonElement>(null)

  const onFinish = () => {
    buttonCloseRef.current?.click()
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        {triggerComponent}
      </DialogTrigger>
      
      <DialogContent className="w-[calc(100vw-2rem)] overflow-auto  w-max-[425px]">
        <FormTodo
          todoId={todoId}
          onFinish={onFinish}
          customTitle={(form) => (
            <DialogHeader className="">
              <DialogTitle className="">
                <FormTodoTitleInput name="title" control={form.control} />
              </DialogTitle>
            </DialogHeader>
          )}
          customButton={
            <DialogFooter >
              <Button size="sm" className="w-[100%]" type="submit">Salvar</Button>
            </DialogFooter>
          } 
        />
        <DialogClose ref={buttonCloseRef} />
      </DialogContent>
      
    </Dialog>
  );
}
