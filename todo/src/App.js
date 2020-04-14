import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Reducer, initialState } from './reducers/Reducer'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <>
      <TodoForm dispatch={dispatch}/>
      <TodoList todo={state} dispatch={dispatch}/>
    </>
  );
}

export default App;
