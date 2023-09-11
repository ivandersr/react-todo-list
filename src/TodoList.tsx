import { Todo, TodoData } from "./Todo"

import styles from './TodoList.module.css';

interface TodoListProps {
  todos: TodoData[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.createdTasks}>Tarefas criadas <span>5</span></p>
        <p className={styles.finishedTasks}>Concluídas <span>2 de 5</span></p>
      </div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          done={todo.done}
          description={todo.description}
        />
      ))}
    </div>
  )
}