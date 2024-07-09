import react from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';



function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total
  } = react.useContext(TodoContext);

  return (

    <h1 className="TodoCounter">
    Has completado <span>{completed}</span> de <span>{total}</span> TODOs
  </h1>

  );
}

export { TodoCounter };
