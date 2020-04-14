import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props)
    return(
        <div>
            {props.todo.list.map(item => (
                <Todo key={item.id} item={item} dispatch={props.dispatch}/>
            ))}
            <button onClick={()=> props.dispatch({type: 'REMOVE_TODO'})}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;