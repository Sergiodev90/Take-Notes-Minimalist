//En la parte inferior se encuentra el codigo usando
//React context para trabajar con funciones render

//-------------- 0 ---------------0 -----------

// import { TodoCounter } from "../components/TodoCounter";
// import { TodoSearch } from "../components/TodoSearch";
// import { TodoList } from "../components/TodoList";
// import { TodoItem } from "../components/TodoItem";
// import { TodosLoading } from "../components/TodosLoading";
// import { TodosError } from "../components/TodosError";
// import { EmptyTodos } from "../components/EmptyTodos";
// import { CreateTodoButton } from "../components/CreateTodoButton";
// import { TodoContext } from "../components/TodoContext";
// function AppUI() {
//   return (
//     <>

//       <TodoCounter />
//       <TodoSearch />
//       <TodoContext.Consumer>
//         {({
//           loading,
//           error,
//           searchedTodos,
//           completeTodo,
//           deleteTodo
//         }) => (
//           <TodoList>
//             {loading && (
//               <>
//                 <TodosLoading />
//                 <TodosLoading />
//                 <TodosLoading />
//               </>
//             )}
//             {error && <TodosError />}
//             {!loading && searchedTodos.length === 0 && <EmptyTodos />}
//             {searchedTodos.map((todo) => (
//               <TodoItem
//                 key={todo.text}
//                 text={todo.text}
//                 completed={todo.completed}
//                 onComplete={() => completeTodo(todo.text)}
//                 onDelete={() => deleteTodo(todo.text)}
//               />
//             ))}
//           </TodoList>
//         )}
//       </TodoContext.Consumer>
//       <CreateTodoButton />
//     </>
//   );
// }
// export { AppUI };

//En esta seccion de abajo ya se encuentra especificado
//como usarla con modales, usando useContext
import React from "react"
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from "../components/TodoContext";
import {TodoForm} from "../components/TodoForm";
import { TodoNotFound} from "../components/TodoNotFound";
import {TodoContainer} from "../components/TodoContainer"
import { Root } from "./Root";
import { Modal } from "../components/Modal";

function AppUI() {

  const {      
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    todos
  } = React.useContext(TodoContext);

  return (
    <>  
    <Root>
     <TodoSearch />
      <TodoCounter />
        <TodoContainer className="TodoList-Container">
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && todos.length <=0 && <EmptyTodos/> }
            {!loading && searchedTodos.length === 0 && todos.length > 0  && <TodoNotFound/>}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          </TodoContainer>
      <CreateTodoButton />
      {openModal && 
        <Modal>
          <TodoForm/>
        </Modal>}
        </Root>
    </>

  );
}
export { AppUI };
