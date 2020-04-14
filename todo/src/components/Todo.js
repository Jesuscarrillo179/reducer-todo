import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div 
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.dispatch({type: 'TOGGLE_COMPLETE', payload:props.item.id})}
        >
            <p>{props.item.item}</p>
        </div>
    );
};

export default Todo;