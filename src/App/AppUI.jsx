import React from "react"
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../components/TodoContext";
import {TodoForm} from "../components/TodoForm";
import { TodoNotFound} from "../components/TodoNotFound";
import {TodoContainer} from "../components/TodoContainer"
import { Root } from "./Root";
import { Modal } from "../components/Modal";
import { TodoHeader } from "../components/TodoHeader";

function AppUI() {
  const {      
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    todos,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    stateClickCompleted,
    stateClickAll,
    stateClickArchived,
    stateClickPending,
    setOpenModal,
    Categories
  } = React.useContext(TodoContext);



  return (
    <>  
    <Root>
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} categories={Categories}/>
      </TodoHeader>
        <TodoContainer className="TodoList-Container">
         <TodoList
          Loading={loading}
          stateClickAll={stateClickAll}
          stateClickCompleted={stateClickCompleted}
          stateClickArchived={stateClickArchived}
          stateClickPending = {stateClickPending}
          error={error}
          searchedTodos = {searchedTodos}
          todos = {todos}
          onError = {()=><TodosError/>}
          onLoading = {()=> <TodosLoading/>}
          onEmpty = {() => <EmptyTodos/>}
          onNotFound = {() => <TodoNotFound/>}
          
          renderAll ={(todo)=>(

                <TodoItem
                key={todo.id}
                text={todo.text}
                categories={todo.category}
                completed={todo.completed}
                isOnArchives={todo.inArchived}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}

              />


            )}
          >
            {/* {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )} */}

              
          </TodoList>
          </TodoContainer>
      {openModal && 
        <Modal setOpenModal={setOpenModal} openModal={openModal}>
          <TodoForm />
        </Modal>}
        </Root>
    </>

  );
}
export { AppUI };
