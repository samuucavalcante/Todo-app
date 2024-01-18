"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { FormTodo } from "./form-todo";
import { useRef } from "react";

export function AddTodo() {
  const triggerRef= useRef<HTMLButtonElement>(null)

  const onClose = () => {
    triggerRef.current?.click()
  }

  return (
    <Dialog>
      <DialogTrigger ref={triggerRef}>
        <button className={cn("rounded-full border-2 p-1 border-slate-600 ")}>
          <Plus className="text-slate-600 font-bold" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <FormTodo onFinish={onClose} />
      </DialogContent>
    </Dialog>
  );
}
