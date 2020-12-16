import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, filterStatus])

  const filterHandler = () => {
    switch (filterStatus) {
      case 'completed':
        setFilterTodos(todos.filter(data => data.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(data => data.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setFilterStatus={setFilterStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterStatu={filterStatus}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
