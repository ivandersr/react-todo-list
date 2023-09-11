import { useState } from 'react';
import { Trash } from "phosphor-react"
import styles from './Todo.module.css';

export interface TodoData {
  id?: number;
  done: boolean;
  description: string;
}

export const Todo = ({ done, description }: TodoData) => {
  const [isDone, setIsDone] = useState(done);

  const handleDoneClick = () => {
    setIsDone(!isDone);
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={isDone}
        onClick={handleDoneClick}
        className={styles.checkbox}
      />
      <p className={isDone ? styles.todoDone : styles.todo}>{description} </p>
      <button className={styles.deleteButton}>
        <Trash size={16} />
      </button>
    </div>
  )
}