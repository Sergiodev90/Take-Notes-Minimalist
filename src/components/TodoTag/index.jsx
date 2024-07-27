import React from 'react';
import './TodoTag.css'; // Make sure to create this CSS file and include it in your project

function TodoTag({ text }) {
    console.log(text)
    return (
        <span className="todo-tag">
            {text}
            <i className="fas fa-times todo-tag-remove" ></i>
        </span>
    );
}

export {TodoTag};