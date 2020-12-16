import React from 'react';

function Todo({ text, id, setTodos, todos, completed, filterStatus }) {

    const deleteTodoHandler = (id) => {
        // e.preventDefault();
        let newData = todos.filter(data => data.id !== id);
        setTodos(newData);
    }

    const checkTodoHandler = (id) => {
        // e.preventDefault();
        setTodos(todos.map(data => {
            if (data.id === id) {
                return {
                    ...data,
                    completed: !data.completed
                };
            }
            return data;
        }))
    }

    return (
        <div key={id} className="todo">
            <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
            <button onClick={() => checkTodoHandler(id)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={() => deleteTodoHandler(id)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
