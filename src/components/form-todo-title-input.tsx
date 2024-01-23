"use state";
import { UseControllerProps, useController } from "react-hook-form";
import { type FormTodo } from "./form-todo";

type FormTodoTitleInputProps = UseControllerProps<FormTodo>;
export function FormTodoTitleInput(props: FormTodoTitleInputProps) {
  const { field, fieldState } = useController(props);

  return (
    <div className="relative flex flex-col">
      <input
        {...field}
        value={field.value as string}
        className="font-bold text-2xl placeholder:text-center ml-0 pl-0 placeholder:italic bg-transparent border-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none focus-visible:outline-0"
        placeholder="*Título"
        autoFocus
      />
      {fieldState.error?.message && (
        <span className="absolute -bottom-3  text-red-600 text-xs">
          {fieldState.error.message}
        </span>
      )}
    </div>
  );
}
