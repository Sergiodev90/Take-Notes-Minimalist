import './TodoList.css';

function TodoList(props) {


  return (
    
    <div className="TodoList">
      {props.Loading && props.onLoading()}
      {props.error && props.onError()}
      {!props.loading && props.todos.length <=0 && props.onEmpty() }
      {(!props.loading && props.searchedTodos.length === 0 && props.todos.length > 0)  && props.onNotFound()}
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export { TodoList };

