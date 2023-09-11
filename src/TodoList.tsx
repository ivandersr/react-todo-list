import { useState, FormEvent, ChangeEvent } from "react";
import { Todo, TodoData } from "./Todo"

import styles from './TodoList.module.css';
import { PlusCircle } from "phosphor-react";

interface TodoListProps {
  todos: TodoData[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  const [todoList, setTodoList] = useState(todos);
  const [doneList, setDoneList] = useState<TodoData[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();

    if (newTodoText.trim()) {
      setTodoList([
        ...todoList,
        {
          id: (todoList.length ? Math.max(...todoList.map(todo => todo.id)) : 0) + 1,
          description: newTodoText,
          done: false
        }
      ]);
    }

    setNewTodoText('');
  }

  const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setNewTodoText(e.target.value);
  }

  const onToggleTodo = (todo: TodoData) => {
    console.log(todo);
    if (todo.done) {
      setTodoList([...todoList, {
        ...todo,
        done: false
      }].sort((a, b) => a.id - b.id));
      setDoneList(doneList.filter(task => task.id !== todo.id))
    } else {
      setDoneList([
        ...doneList, {
          ...todo,
          done: true
        }
      ].sort((a, b) => a.id - b.id));
      setTodoList(todoList.filter(task => task.id !== todo.id));
    }
  }

  const onDeleteTodo = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
    setDoneList(doneList.filter(todo => todo.id !== id));
  }

  return (
    <div className={styles.container}>
      <form className={styles.newTodo} onSubmit={handleNewTodo}>
        <input
          type="text"
          name="description"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTodoChange}
          value={newTodoText}
        />
        <button type="submit">Criar <PlusCircle size={20} /></button>
      </form>
      <div className={styles.header}>
        <p className={styles.createdTasks}>Tarefas criadas <span>{todoList.length + doneList.length}</span></p>
        <p className={styles.finishedTasks}>Concluídas <span>{doneList.length} de {todoList.length + doneList.length}</span></p>
      </div>
      {todoList.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
      {doneList.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  )
}