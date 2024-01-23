type Task = {
  id: string
  index: number
  title: string
  completed: boolean
  todoId: string
}


export interface Todo {
  id: string
  title: string
  userId: string
  tasks: Task[]
}