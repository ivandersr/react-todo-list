import { Header } from "./Header"
import { TodoData } from "./Todo";
import { TodoList } from "./TodoList";

import './global.css';

function App() {

  const todos: TodoData[] = [
    {
      id: 1,
      done: false,
      description: 'Um teste inicial de todos'
    },
    {
      id: 2,
      done: false,
      description: 'Um teste inicial de todos'
    },
    {
      id: 3,
      done: false,
      description: 'Um teste inicial de todos'
    },
  ];

  return (
    <>
      <Header />
      <TodoList todos={todos} />
    </>
  )
}

export default App
