import './TodoList.css';

function TodoList(props) {



  return (
    
    <div className="TodoList">
      {props.Loading && props.onLoading()}
      {props.error && props.onError()}
      {(!props.loading && props.todos.length <=0) && props.onEmpty() }
      {(!props.loading && props.searchedTodos.length === 0 && props.todos.length > 0)  && props.onNotFound()}
      {(props.stateClickAll &&!props.Loading) && props.searchedTodos.filter((todo) => todo.inAll === true).map(props.renderAll)}
      {(props.stateClickCompleted &&!props.Loading) && props.searchedTodos.filter((todo) => todo.completed === true).map(props.renderAll)}
      {(props.stateClickArchived &&!props.Loading) && props.searchedTodos.filter((todo) => todo.inArchived === true).map(props.renderAll)}
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export { TodoList };

