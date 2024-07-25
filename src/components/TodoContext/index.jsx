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

  const addTodo = (text, category) =>{
    const newTodos = [...todos];
    newTodos.push({id:RandomId(), text, completed: false, category: category,inAll:true,inCompleted:false, inArchived:false})
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
   
      
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

