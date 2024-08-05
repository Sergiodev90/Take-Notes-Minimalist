import React, {  useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { RandomId } from '../../utils/RandomID';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const {
    item: Categories,
    saveItem: saveCategories,
    // loading: loadingCategories,
    // error: errorCategories,
  } = useLocalStorage('CATEGORIES_V1', [{id:1,category:'All',color:"no one"}]);

  const [searchValue, setSearchValue] = React.useState('');
  const [searchCategory,setSearchCategory] = React.useState('All')
  const [openModal, setOpenModal] = React.useState(false);
  const [stateClickAll,setStateClickAll] = React.useState(true);
  const [stateClickCompleted,setStateClickCompleted] = React.useState(false);
  const [stateClickArchived,setStateClickArchived] = React.useState(false);
  const [stateClickPending, setStateClickPending] = React.useState(false)

  const [completed,setCompleted] = useState(false)
  const [all,setAll] = useState(true)
  const [pending,setPending] = useState(true)
  const [archived,setArchived] = useState(false)
  const { RandomId__Todo } = RandomId()






  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.filter((todo) => todo.inAll).length;

  // const RandomId = () =>{
  //   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  // }

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) 
    }
  );
  
  const searchedTodosByCategory= todos.filter(todo => {

    
    const todoCategories = todo.categories.find(category => category.category === searchCategory)
    
    return todoCategories !== undefined          
  });
  console.log('Aqui esta las categorias funcionando', searchCategory, searchedTodosByCategory)

  const addTodo = (text, categories,startDate,endDate) =>{
    const newTodos = [...todos];
    const newCategories = [...Categories];


    
    newTodos.push({
      id: RandomId__Todo(), 
      text, 
      completed: completed, 
      categories: categories,
      pending:pending,
      inAll:all,
      inArchived:false,
      startDate:startDate,
      endDate:endDate
    })
    newCategories.push(...categories)

    saveCategories(newCategories)
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
    const newLocalCategories = [...Categories]
    const newTodos = todos.filter((todo) => todo.id !== id);
  const categoriesToDelete = todos
    .filter((todo) => todo.id === id)
    .flatMap((todo) => todo.categories.map((cat) => cat.id));
  
  const newCategories = newLocalCategories.filter(
    (category) => !categoriesToDelete.includes(category.id)
  );

    saveTodos(newTodos)
    saveCategories(newCategories)
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
      setPending,
      Categories,
      setSearchCategory,
      searchedTodosByCategory,
      searchCategory
      
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };



