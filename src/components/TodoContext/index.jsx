import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);


  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [stateClickAll,setStateClickAll] = React.useState(true);
  const [stateClickCompleted,setStateClickCompleted] = React.useState(false);
  const [stateClickArchived,setStateClickArchived] = React.useState(false);

  const [completed,setCompleted] = useState(false)
  const [all,setAll] = useState(true)
  const [archived,setArchived] = useState(false)






  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const RandomId = () =>{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  console.log("aqui estan los todos",searchedTodos)

  const addTodo = (text, category) =>{
    const newTodos = [...todos];
    newTodos.push({
      id:RandomId(), 
      text, 
      completed: completed, 
      category: category,
      inAll:all,
      inArchived:archived,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = todos.filter((todo)=>{
      if(todo.id === id){
      todo.completed = !completed
      todo.inArchived = false
      todo.inAll = !all
      }
      return todo
    })

    saveTodos(newTodos)
  };

  const deleteTodo = (id) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    const newTodos = todos.filter((todo) => {
      if(todo.id === id){
        todo.inArchived = true;
        todo.inAll = false;
        todo.completed = false
      }
      return todo
    })
    saveTodos(newTodos)
  };


  console.log("Estado del boton All",stateClickAll)
  console.log("Estado del boton completado",stateClickCompleted)
  console.log("Estado del boton archivado",stateClickArchived)





  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      todos,
      stateClickCompleted,
      setStateClickCompleted,
      stateClickArchived,
      setStateClickArchived,
      stateClickAll,
      setStateClickAll,

      completed,archived,all,setCompleted,setArchived,setAll
      
  
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
