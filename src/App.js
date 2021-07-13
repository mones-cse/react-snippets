import "./App.scss";
import { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO"
};
const reducer = (todoState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todoState, newTodo(action.payload)];
        case ACTIONS.DELETE_TODO:
            let temp = [...todoState];
            console.log('--->',temp);
            let findIndex = temp.findIndex(each => each.id=== action.payload);
            console.log('--->',findIndex);
            temp.splice(findIndex,1);
            console.log('--->',temp);
            return [...temp];
        default:
            console.log("default");
            return todoState;
    }
};

const newTodo = todoText => {
    return {
        todoText: todoText,
        id: Date.now(),
        complete: false,
    };
};

const trashIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-trash"
        viewBox="0 0 16 16"
    >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
    </svg>
);

function App() {
    const [todoText, setTodoText] = useState("");
    const [todoList, dispatch] = useReducer(reducer, []);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: todoText });
        setTodoText("");
    };

    const deleteHandler = (id) => {
        dispatch({type:ACTIONS.DELETE_TODO ,payload:id});
    };
    return (
        <div className="container bg-light text-center">
            <div className={"col-6 text-center m-auto"}>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={todoText}
                        onChange={e => setTodoText(e.target.value)}
                    />
                </form>
                <div>
                    {todoList.map(todo => (
                        <div key={todo.id}>
                            <p className={"d-flex justify-content-between"}>
                                {todo.todoText}{" "}
                                <span onClick={()=>deleteHandler(todo.id)}>{trashIcon}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
