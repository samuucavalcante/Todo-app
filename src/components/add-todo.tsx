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
import { useRef } from "react";
import { FormTodo } from "./form/form-todo/form-todo";
import { FormTodoTitleInput } from "./form/form-todo/form-todo-title-input";
import { Button } from "./ui/button";

export function AddTodo() {
  const buttonCloseRef = useRef<HTMLButtonElement>(null)

  const onFinish = () => {
    buttonCloseRef.current?.click()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("rounded-full border-2 p-1 border-slate-600 ")}>
          <Plus className="text-slate-600 font-bold" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormTodo
          onFinish={onFinish}
          customTitle={(form) => (
            <DialogHeader className="-mt-4">
              <DialogTitle className="">
                <FormTodoTitleInput name="title" control={form.control} />
              </DialogTitle>
            </DialogHeader>
          )}
          customButton={
            <DialogFooter>
              <Button size="sm" type="submit">Salvar</Button>
            </DialogFooter>
          } 
        />
        <DialogClose ref={buttonCloseRef} />
      </DialogContent>
      
    </Dialog>
  );
}
