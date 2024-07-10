import React from "react";
import './TodoContainer.css';

function TodoContainer({children}){
    return(
        <div className="TodoContainer--list">
            {children}
        </div>
    );
}

export { TodoContainer}