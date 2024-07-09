import React from "react";
import { TodoContext } from "../TodoContext";
import "./EmptyTodos.css";


function EmptyTodos(){
   const {openMessageCreate, setOpenMessageCreate} = React.useContext(TodoContext)
   setOpenMessageCreate(true)
   return (
      <div className = "EmptyTodos">
         <p> CREATE NEW TODOS</p>
      </div>
   );
}

export {EmptyTodos} 