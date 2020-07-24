import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoReducer, initialState } from './components/reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const AddTask = newText => dispatch({ type: 'ADD_TASK', payload: newText })
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      {state.tasks.map(tasks => {
        return <TodoList
          key={tasks.id} tasks={tasks} />
      })}

      <TodoForm
        additem={AddTask} />
    </div>
  );
}

export default App;
