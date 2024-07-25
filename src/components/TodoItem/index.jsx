import React, { useContext, useState } from "react";
import { TodoCategory } from "../TodoCategory";
import { ReactComponent as ArchiveBoxIcon } from "../../svg/archive.svg";
import { CheckboxCircular } from "../CheckBoxCircular";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.completed);
  const { completed,setCompleted,setAll,all} = useContext(TodoContext)
  const handleCheckboxChange = () => {
    setCompleted(!completed);
    setAll(!all)
    props.onComplete();
  };

      
  

  return (
    <li className="TodoItem">
      <CheckboxCircular checked={completed} onChange={handleCheckboxChange} />
      <p className={`TodoItem-p ${checked && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <DeleteIcon onDelete={props.onDelete} /> */}
      <TodoCategory />
      <ArchiveBoxIcon className="ArchiveIcon" onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
