import "./App.scss";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(prevCount => prevCount+1);
    };
    const decrement = ()=>{
        setCount(prevCount => prevCount-1);
    };
    return (
        <div className="container bg-light min-vh-100 text-center">
           <button className={"btn btn-lg btn-info m-5"} onClick={increment}>+</button>
            <span className={"p-5"}>{count}</span>
           <button className={"btn btn-lg btn-info m-5"} onClick={decrement}>-</button>

        </div>
    );
}

export default App;
