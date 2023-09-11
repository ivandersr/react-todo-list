import { Todo, TodoData } from "./Todo"

interface TodoListProps {
  todos: TodoData[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          done={todo.done}
          description={todo.description}
        />
      ))}
    </>
  )
}