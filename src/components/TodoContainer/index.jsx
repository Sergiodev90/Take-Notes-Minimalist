import React,{useContext} from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import './TodoContainer.css';

function TodoContainer(props){
    const {  
        setStateClickCompleted,
        setStateClickArchived,
        setStateClickAll
    } = useContext(TodoContext);

    const ActiveAll = () =>{
        setTimeout(() => {
            setStateClickAll(true)
            setStateClickArchived(false)
            setStateClickCompleted(false)  
        }, 100);
    }
    const ActiveCompleted = () =>{

        setTimeout(()=>{
            setStateClickAll(false)
            setStateClickArchived(false)
            setStateClickCompleted(true) 
        },100)


    }
    const ActiveArchived = () =>{
        setTimeout(() => {
            setStateClickAll(false)
            setStateClickArchived(true)
            setStateClickCompleted(false)
        }, 100);

    }
    return(
        // onClick={()=>ActiveAll()}
        <>
        <div className="TodoContainer-Eyelashes">
            <button className="Eyelashes-TodoContainer-list wrapper" onClick={()=>ActiveAll()}><span>ALL</span></button>
            <button className="Eyelashes-TodoContainer-list wrapper " onClick={()=>ActiveCompleted()}><span>COMPLETED</span></button>
            <button className="Eyelashes-TodoContainer-list wrapper" onClick={()=>ActiveArchived()}><span>ARCHIVED</span></button>
            
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


