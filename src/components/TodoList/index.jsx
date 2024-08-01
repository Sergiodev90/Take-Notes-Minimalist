import './TodoList.css';

function TodoList(props) {



  return (
    
    <div className="TodoList">
      {props.Loading && props.onLoading()}
      {props.error && props.onError()}
      {(!props.Loading && props.todos.length <=0) && props.onEmpty() }
      {(!props.Loading && props.searchedTodos.length === 0 && props.todos.length > 0)  && props.onNotFound()}

      {/* WHEN THE USER CLICKS IN ALL*/}
      {(props.stateClickAll &&!props.Loading) && props.searchedTodos.filter((todo) => todo.pending === true || todo.completed=== true ).map(props.renderAll)}

      {/*WHEN THE USES CLICKS IN PENDING */}
      {(props.stateClickPending &&!props.Loading) && props.searchedTodos.filter((todo) => todo.pending ===  true && todo.completed === false  ).map(props.renderAll)}

      {(props.stateClickCompleted &&!props.Loading) && props.searchedTodos.filter((todo) => todo.completed === true && todo.pending === false).map(props.renderAll)}

      {(props.stateClickArchived &&!props.Loading) && props.searchedTodos.filter((todo) => todo.inArchived === true).map(props.renderAll)}
      <ul>
        <li>
        {props.children}

        </li>
      </ul>
    </div>
  );
}

export { TodoList };

