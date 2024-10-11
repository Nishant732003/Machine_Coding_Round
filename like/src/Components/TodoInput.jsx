import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const onInputTodo = (e) => {
        setTodo(e.target.value);
    };
//handle submission of todo
    const handleTodoSubmit = (e) => {
        e.preventDefault();
        addTodo();
        setTodo("");
    };

    //action craetor
    const addTodo = () => {
        //dispatch action  to add a todo
        return dispatch({
            type: "todos/addedTodo",
            payload: { id: Math.floor(Math.random() * 20) + 1.1, item: todo },
        });
    };
    return (
        <div>
            <form onSubmit={handleTodoSubmit}>
                <input type="text" value={todo} onChange={onInputTodo}></input>
                <button>Add Todo</button>
            </form>
        </div>
    )

}


export default TodoInput;