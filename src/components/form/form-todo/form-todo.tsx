"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRightFromCircle,
  Circle,
  GripVertical,
  Plus,
  Trash2,
} from "lucide-react";
import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { UseFormStateProps, useFieldArray, useForm } from "react-hook-form";
import { FormTodoTitleInput } from "./form-todo-title-input";
import { FormTodo, todoSchema } from "../schemas/todo-schema";
import { useTodos } from "@/hooks/api/useTodos";
import uuid from "react-uuid";
import { Skeleton } from "@/components/ui/skeleton";
import { reorder, sortByProperty } from "@/utils/array";

type FormTodoProps = {
  todoId?: string;
  onFinish?: () => void;
  customButton?: ReactNode;
  customTitle?: (form: UseFormStateProps<FormTodo>) => ReactNode;
};

export function FormTodo({
  todoId,
  onFinish,
  customTitle,
  customButton,
}: FormTodoProps) {
  const { create, update, get } = useTodos();
  const [loading, setLoading] = useState(!!todoId);
  const { ...form } = useForm<FormTodo>({
    resolver: zodResolver(todoSchema),
    delayError: 0,
    defaultValues: {
      title: "",
      tasks: [],
    },
  });

  const { fields, append, remove, swap } = useFieldArray({
    control: form.control,
    name: "tasks",
  });

  const getTodo = useCallback(async () => {
    if (!todoId) return;
    const todo = await get(todoId);
    setLoading(false);
    form.reset({...todo, tasks: sortByProperty(todo.tasks, 'index')});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoId]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const onSubmit = async (data: FormTodo, callOnFinish: boolean) => {
    const store = todoId ? update : create;
    await store({
      id: data.id ? data.id : uuid(),
      tasks: sortByProperty(data.tasks, 'index'),
      title: data.title,
      userId: data.userId as string,
    });

    callOnFinish && onFinish?.();
  };

  const onDragEnd: OnDragEndResponder = async (result) => {
    if (!result.destination) return;

    const initialIndex = result.source.index;
    const finalIndex = result.destination.index;

    const tasksReordeded = reorder(form.getValues("tasks"), initialIndex, finalIndex);
    const makePayload = tasksReordeded.map((task, index) => ({...task, index}))

    form.setValue("tasks", makePayload);
  };
  const onAddTask = () => {
    append({
      id: uuid(),
      completed: false,
      index: fields.length,
      title: "",
      todoId: "",
    });
  };

  const title = customTitle ? (
    customTitle(form)
  ) : (
    <FormTodoTitleInput name="title" control={form.control} />
  );

  const buttonSubmit = customButton ? (
    customButton
  ) : (
    <Button type="submit">Submit</Button>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => onSubmit(data, true))}
          className="space-y-8"
        >
          <div className="space-y-2 ">
            {loading ? <Skeleton className="-ml-3 w-60 h-7 -mt-2" /> : title}
            <button
              type="button"
              onClick={onAddTask}
              className="border flex flex-row items-center border-transparent transition-all duration-100 p-2 text-sm rounded-md hover:border-white/50"
            >
              <Plus />
              <span>Adicionar tarefas</span>
            </button>
          </div>
          <Droppable droppableId="tasks" type="list" direction="vertical">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="space-y-4 transition-all duration-150 overflow-auto max-h-[154px]"
              >
                {!fields.length && !loading && !!form.watch("title").length && (
                  <p className="text-white/60 italic">
                    Nenhuma mini-tarefa criada ainda.
                  </p>
                )}
                {sortByProperty(fields, "index").map((field, index) => (
                  <Draggable
                    index={index}
                    draggableId={field.id}
                    key={field.id}
                  >
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn("flex space-x-2 shadow-2xl", {
                          "shadow-lg": snapshot.isDragging,
                        })}
                      >
                        <GripVertical />
                        <div className="flex flex-col items-center gap-2">
                          <input
                            disabled={!form.watch(`tasks.${index}.title`)}
                            type="checkbox"
                            className="cursor-pointer checked:bg-green-500"
                            {...form.register(`tasks.${index}.completed`)}
                          />
                          <button onClick={() => remove(index)}>
                            <Trash2 size={15} className="text-red-600" />
                          </button>
                        </div>
                        <div className="flex flex-col relative">
                          <input
                            data-completed={
                              !!form.watch(`tasks.${index}.completed`)
                            }
                            placeholder="*Título da tarefa"
                            className="pb-1 data-[completed=true]:line-through decoration-white/80 decoration-2 transition-all duration-150 text-sm bg-transparent placeholder:italic border-2 border-transparent outline-none placeholder:px-2 focus:border-b-2  focus:border-b-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            {...form.register(`tasks.${index}.title`)}
                          />
                          {form.formState.errors.tasks?.[index]?.title
                            ?.message && (
                            <span className="absolute -bottom-2 text-red-600 text-xs">
                              {
                                form.formState.errors.tasks?.[index]?.title
                                  ?.message
                              }
                            </span>
                          )}
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          {buttonSubmit}
        </form>
      </Form>
    </DragDropContext>
  );
}
