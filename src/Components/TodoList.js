import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos, filterStatus, filterTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filterTodos.map(data =>
                        <Todo key={data.id}
                            text={data.text}
                            id={data.id}
                            setTodos={setTodos}
                            todos={todos}
                            completed={data.completed}
                            filterStatus={filterStatus}
                        />
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;
