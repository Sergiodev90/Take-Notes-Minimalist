import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { openModal, setOpenModal, openMessageCreate, setOpenMessageCreate} = React.useContext(TodoContext);

  return (
    <button
      className={`CreateTodoButton ${openMessageCreate ? 'pulse' : ''}`}
      onClick={() => {
        setOpenModal(!openModal) 
        setOpenMessageCreate(false)
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };