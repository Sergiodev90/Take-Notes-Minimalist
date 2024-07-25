import React, { useState } from "react";
import { TodoCategory } from "../TodoCategory";
import { ReactComponent as ArchiveBoxIcon } from "../../svg/archive.svg";
import { CheckboxCircular } from "../CheckBoxCircular";
import "./TodoItem.css";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.completed);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    props.onComplete();
  };

  return (
    <li className="TodoItem">
      <CheckboxCircular checked={checked} onChange={handleCheckboxChange} />
      <p className={`TodoItem-p ${checked && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <DeleteIcon onDelete={props.onDelete} /> */}
      <TodoCategory />
      <ArchiveBoxIcon className="ArchiveIcon"/>
    </li>
  );
}

export { TodoItem };
