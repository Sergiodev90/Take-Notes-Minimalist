import React, {  useState } from 'react';
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
  const [stateClickPending, setStateClickPending] = React.useState(false)

  const [completed,setCompleted] = useState(false)
  const [all,setAll] = useState(true)
  const [pending,setPending] = useState(true)
  const [archived,setArchived] = useState(false)






  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.filter((todo) => todo.inAll).length;

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
      pending:pending,
      inAll:all,
      inArchived:false
    })
    saveTodos(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = todos.filter((todo)=>{
      if(todo.id === id){
      setCompleted(!completed)
      setPending(!pending)
      todo.completed = completed
      todo.pending = pending
      todo.inAll = all
      }
      return todo
    })
    saveTodos(newTodos)
  };

  const deleteTodo = (id) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    const newTodos = todos.filter((todo) =>{

      if(todo.id === id){
        todo.inArchived = true
        todo.inAll = undefined
        todo.completed  = undefined
        todo.pending = undefined
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
      setStateClickPending,
      stateClickPending,
      completed,
      archived,
      all,
      setCompleted,
      setArchived,
      setAll,
      pending,
      setPending
      
  
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
