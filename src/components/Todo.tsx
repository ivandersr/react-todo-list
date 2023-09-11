import { useState } from 'react';
import { Trash } from "phosphor-react"
import styles from './Todo.module.css';

export interface TodoData {
  id: number;
  done: boolean;
  description: string;
}

interface TodoProps {
  todo: TodoData;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (todo: TodoData) => void;
}

export const Todo = ({ todo, onDeleteTodo, onToggleTodo }: TodoProps) => {
  const [isDone, setIsDone] = useState(todo.done);

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  }

  const handleToggleTodo = () => {
    setIsDone(!isDone);
    onToggleTodo(todo)
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
        className={styles.checkbox}
      />
      <p className={isDone ? styles.todoDone : styles.todo}>{todo.description} </p>
      <button className={styles.deleteButton} onClick={handleDeleteTodo}>
        <Trash size={16} />
      </button>
    </div>
  )
}