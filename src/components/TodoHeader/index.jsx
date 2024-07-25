import React from "react";
import './TodoHeader.css'
function TodoHeader({children}){
    return(
        <div className="Header-Todo_counter_search">
            {children}
        </div>
    )
}

export {TodoHeader}