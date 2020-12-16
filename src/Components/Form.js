import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ setInputText, todos, setTodos, inputText, setFilterStatus }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const todoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: uuidv4()
            }
        ]);
        setInputText("");
    }

    const filterStatusHandler = (e) => {
        setFilterStatus(e.target.value);
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={todoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterStatusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;
