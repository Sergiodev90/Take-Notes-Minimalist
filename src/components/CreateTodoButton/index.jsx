import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { openModal, setOpenModal,loading,todos} = React.useContext(TodoContext);


  const shouldApplyStartClass = todos.length<= 0 && !loading;

  return (
    <button className={`CreateTodoButton ${ shouldApplyStartClass? 'CreateTodoButton--start' : ''}`}

      onClick={() => {
        setOpenModal(!openModal) 
      }}
      
    >
      +
    </button>
  );
}

export { CreateTodoButton };