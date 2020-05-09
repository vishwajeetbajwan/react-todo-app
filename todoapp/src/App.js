import React, { useState } from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, content: 'buy chips' },
    { id: 2, content: 'learn react' },
  ]);
  const deleteTodo = (id) => {
    const newtodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newtodos);
  };

  const addToDo = (todo) => {
    todo.id = Math.random();
    let newtodos = [...todos, todo];
    settodos(newtodos);
  };

  return (
    <div className="App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddToDo addToDo={addToDo} />
    </div>
  );
};

export default App;
