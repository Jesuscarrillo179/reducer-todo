import React, { useState } from 'react';

const ToDoForm = props => { 
const [todo, setTodo] = useState('')

    const handleChanges = e => {
        setTodo(e.target.value)
    }

    const newItem = {
        item: todo,
        completed: false,
        id:Date.now
    }


    return(
        <>
            <input
                type="text"
                value={todo}
                name="item"
                onChange={handleChanges}
            />
            <button onClick={()=> props.dispatch({type: 'ADD_TODO', payload: newItem})}>Add Todo</button>
        </>
    )
}

export default ToDoForm;