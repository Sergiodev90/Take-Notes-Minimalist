
import './TodoCounter.css';



function TodoCounter({completed,total}) {

  return (

    <h1 className="TodoCounter">
    Completed <span>{completed}</span> of <span>{total}</span> TODOs
  </h1>

  );
}

export { TodoCounter };
