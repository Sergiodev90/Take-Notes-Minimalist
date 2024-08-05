// import './TodoList.css';

// function TodoList(props) {
//     if(props.searchCategory === 'All'){
//       console.log("We are in All")
//     }else{
//       console.log("We are in", props.searchCategory)
//     }



//   return (
    
//     <div className="TodoList">
//       {props.Loading && props.onLoading()}
//       {props.error && props.onError()}
//       {(!props.Loading && props.todos.length <=0) && props.onEmpty() }
//       {(!props.Loading && props.searchedTodos.length === 0 && props.todos.length > 0)  && props.onNotFound()}
// {/* 
//       {/* WHEN THE USER CLICKS IN ALL*/}
//       {(props.searchCategory ==='All') && (props.stateClickAll &&!props.Loading) && props.searchedTodos.filter((todo) => todo.pending === true || todo.completed=== true ).map(props.renderAll)}

//       {/*WHEN THE USES CLICKS IN PENDING */}
//       {props.searchCategory==='All' && (props.stateClickPending &&!props.Loading) && props.searchedTodos.filter((todo) => todo.pending ===  true && todo.completed === false  ).map(props.renderAll)}

//       {props.searchCategory==='All' && (props.stateClickCompleted &&!props.Loading) && props.searchedTodos.filter((todo) => todo.completed === true && todo.pending === false).map(props.renderAll)}

//       {props.searchCategory==='All' && (props.stateClickArchived &&!props.Loading) && props.searchedTodos.filter((todo) => todo.inArchived === true ).map(props.renderAll)} 

//       {props.searchCategory !== 'All' && props.searchedTodos.filter((todo) => todo.pending === true && todo.completed !== true)&& props.searchedTodosByCategory.map(props.renderAll)}
//       <ul>
//         <li>
//         {props.children}

//         </li>
//       </ul>
//     </div>
//   );
// }

// export { TodoList };



import './TodoList.css';

function TodoList(props) {
  if (props.searchCategory === 'All') {
    console.log("We are in All");
  } else {
    console.log("We are in", props.searchCategory);
  }

  const renderTodos = (todos) => todos.map(props.renderAll);

  const filteredTodos = () => {
    // Filtro general de todos
    let todos = props.searchedTodos;

    // Filtrar por categoría
    if (props.searchCategory !== 'All') {
      todos = props.searchedTodosByCategory;
    }

    // Filtrar por estado
    if (props.stateClickPending) {
      todos = todos.filter(todo => todo.pending === true && todo.completed === false);
    } else if (props.stateClickCompleted) {
      todos = todos.filter(todo => todo.completed === true && todo.pending === false);
    } else if (props.stateClickArchived) {
      todos = todos.filter(todo => todo.inArchived === true);
    }

    return todos;
  };

  return (
    <div className="TodoList">
      {props.Loading && props.onLoading()}
      {props.error && props.onError()}
      {(!props.Loading && props.todos.length <= 0) && props.onEmpty()}
      {(!props.Loading && props.searchedTodos.length === 0 && props.todos.length > 0) && props.onNotFound()}

      {!props.Loading && renderTodos(filteredTodos())}
    </div>
  );
}

export {TodoList} ;
