import { SketchPicker } from 'react-color';
import  {ReactComponent as DeleteIcon} from '../../svg/delete.svg';
import './TodoTag.css';

function TodoTag(props) {
 
    const tagStyle = {
        backgroundColor: props.color,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        padding: '0 8px',
        margin: '4px',
        fontSize: '14px',
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        maxWidth: '300px',
        height: '40px',
        cursor: 'pointer',
        opacity:'0.9'
    };

    return (
        <>
          <span
            className="todo-tag"
            style={tagStyle}
            onClick={() => props.handleClick(props.id)}
          >
            {props.text}
            <span className='close--Delete'>
                    <DeleteIcon onClick={props.handleDelete} className='DeleteIcon'/>
            </span>
          </span>
          {props.isSelected && (
            <SketchPicker color={props.color} onChange={props.handleColorChange} />
          )}
        </>
      );
    }

export { TodoTag };
