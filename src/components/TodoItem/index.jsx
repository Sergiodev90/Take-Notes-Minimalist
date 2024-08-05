import React, { useContext, useEffect } from "react";
import { TodoCategory } from "../TodoCategory";
import { ReactComponent as ArchiveBoxIcon } from "../../svg/archive.svg";
import { useState } from "react";
import { CheckboxCircular } from "../CheckBoxCircular";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

function TodoItem(props) {

  const [expandedTodos, setExpandedTodos] = useState([]);


  const handleToggleExpand = (id) => {
      setExpandedTodos((prev) => 
          prev.includes(id) ? prev.filter(todoId => todoId !== id) : [...prev, id]
      );
      
  };



  const { completed,setCompleted} = useContext(TodoContext)
  const handleCheckboxChange = () => {
    setCompleted(!completed);
    props.onComplete();
  };


  

  return (
    <li className="TodoItem">
      <CheckboxCircular checked={props.completed} onChange={handleCheckboxChange} inArchived={props.isOnArchives} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <DeleteIcon onDelete={props.onDelete} /> */}


          <TodoCategory categories={props?.categories} isExpanded={expandedTodos.includes(props?.key)}  handleClickTag={() => handleToggleExpand(props?.key)}/>
          
      
      <ArchiveBoxIcon className="ArchiveIcon" onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
