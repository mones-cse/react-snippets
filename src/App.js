import "./App.scss";
import { useState, useMemo, useEffect } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);
    useEffect(() => {
        console.log("Theme Change");
    }, [themeStyle]);

    const slowFunction = number => {
        for (let i = 0; i < 1000000000; i++) {}
        return number * 2;
    };
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    // if number same we don't recalculate slowFunction instead we return cache value

    return (
        <div className="App container">
            <input
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <br />
            <button
                className={"btn btn-primary"}
                onClick={() => setDark(!dark)}
            >
                Toggle
            </button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
    );
}

export default App;
