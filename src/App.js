import "./App.scss";
import {useReducer, useState} from "react";

const reducer = (state,action)=>{
    switch (action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            return  state;
    }
};

function App() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count:0});

    const increment = ()=>{
        // setCount(prevCount => prevCount+1);
        dispatch({type:"increment"});
    };
    const decrement = ()=>{
        // setCount(prevCount => prevCount-1);
        dispatch({type:"decrement"});
    };
    return (
        <div className="container bg-light min-vh-100 text-center">
           <button className={"btn btn-lg btn-info m-5"} onClick={increment}>+</button>
            <span className={"p-5"}>{state.count}</span>
           <button className={"btn btn-lg btn-info m-5"} onClick={decrement}>-</button>

        </div>
    );
}

export default App;
