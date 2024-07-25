import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import './TodoContainer.css';

function TodoContainer(props){
    return(

        <>
        <div className="TodoContainer-Eyelashes">
            <button className="Eyelashes-TodoContainer-list wrapper"><span>ALL</span></button>
            <button className="Eyelashes-TodoContainer-list wrapper"><span>COMPLETED</span></button>
            <button className="Eyelashes-TodoContainer-list wrapper"><span>ARCHIVED</span></button>
            
             <CreateTodoButton />

        </div>

        <div className="TodoContainer--list">

        <div className="TodoContainer-TodoItem">
            {props.children}
            </div>
        </div>
        </>
   
    );
}

export { TodoContainer}


