import React, { useContext } from "react";
import { TodoCategory } from "../TodoCategory";
import { ReactComponent as ArchiveBoxIcon } from "../../svg/archive.svg";
import { CheckboxCircular } from "../CheckBoxCircular";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

function TodoItem(props) {
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
      <TodoCategory />
      <ArchiveBoxIcon className="ArchiveIcon" onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
