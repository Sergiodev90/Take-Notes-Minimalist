import React from 'react';
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
  const [openMessageCreate, setOpenMessageCreate] = React.useState("false")
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({ text, completed: false })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = todos.filter((todo)=>{
      if(todo.text === text){
      todo.completed = !todo.completed
      }
      return todo
    })

    saveTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos)
  };



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
      openMessageCreate,
      setOpenMessageCreate
      
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

