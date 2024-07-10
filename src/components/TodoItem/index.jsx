import { CompleteIcon } from "../CompleteIcon";
import { TodoCategory } from "../TodoCategory";
import { DeleteIcon } from "../DeleteIcon";
import "./TodoItem.css";
function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      <TodoCategory></TodoCategory>
    </li>
  );
}
export { TodoItem };
