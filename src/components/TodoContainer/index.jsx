import React, { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import './TodoContainer.css';

function TodoContainer(props) {
    const {  
        stateClickCompleted,
        stateClickPending,
        stateClickAll,
        stateClickArchived,
        setStateClickCompleted,
        setStateClickArchived,
        setStateClickAll,
        setStateClickPending
    } = useContext(TodoContext);

    const ActivePending = () => {
        setTimeout(() => {
            setStateClickPending(true);
            setStateClickAll(false);
            setStateClickArchived(false);
            setStateClickCompleted(false);
        }, 100);
    };

    const ActiveAll = () => {
        setTimeout(() => {
            setStateClickAll(true);
            setStateClickPending(false);
            setStateClickArchived(false);
            setStateClickCompleted(false);  
        }, 100);
    };

    const ActiveCompleted = () => {
        setTimeout(() => {
            setStateClickAll(false);
            setStateClickPending(false);
            setStateClickArchived(false);
            setStateClickCompleted(true);
        }, 100);
    };

    const ActiveArchived = () => {
        setTimeout(() => {
            setStateClickAll(false);
            setStateClickArchived(true);
            setStateClickCompleted(false);
            setStateClickPending(false);
        }, 100);
    };

    return (
        <>
            <div className="TodoContainer-Eyelashes">
                <button
                    className={`Eyelashes-TodoContainer-list wrapper ${stateClickAll ? 'active' : ''}`}
                    onClick={() => ActiveAll()}
                >
                    <span>ALL</span>
                </button>
                <button
                    className={`Eyelashes-TodoContainer-list wrapper ${stateClickPending ? 'active' : ''}`}
                    onClick={() => ActivePending()}
                >
                    <span>PENDING</span>
                </button>
                <button
                    className={`Eyelashes-TodoContainer-list wrapper ${stateClickCompleted ? 'active' : ''}`}
                    onClick={() => ActiveCompleted()}
                >
                    <span>COMPLETED</span>
                </button>
                <button
                    className={`Eyelashes-TodoContainer-list wrapper ${stateClickArchived ? 'active' : ''}`}
                    onClick={() => ActiveArchived()}
                >
                    <span>ARCHIVED</span>
                </button>
                
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

export { TodoContainer };
