import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    //deleet a todo
    const onDelete = (id) => {
        return dispatch({
            type: "todos/deleteTodo",
            payload: id,
        });
    };
    //complete Todo
    const onComplete = (id) => {
        return dispatch({
            type: "todos/completeTodo",
            payload: id,
        });
    };
    return (
      <div>
        <h3>{todo.item}</h3>
        <div>
          <button onClick={() => onComplete(todo.id)}>Complete</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </div>
    );
}
export default TodoItem;