const initialState = {
    todos: [
        {
            id: 1,
            item: "Learn Redux",
            completed: false,
        },
        {
            id: 2,
            item: "Learn React",
            completed: false,
        }
    ]

};
//intially what will be render on Page
const todoReducer = (state = initialState, action)=>{
    if (action.type == "todos/addedTodo") {
           return {
             ...state,
             todos: [...state.todos, action.payload],
           };
    }
    else if (action.type == "todos/deleteTodo") {
        return {
            ...state,
            todos:state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }
    else if (action.type == "todos/completeTodo") {
        return {
            ...state,
            todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed:!todo.completed,
                    }
                } else return todo;
            })
           
        }
    }
}
export default todoReducer;