import "./App.scss";
import {useEffect, useState, useCallback} from "react";

function List({getNumber}){
    const [items,setItems] =useState([]);

    useEffect(()=>{
        setItems(getNumber());
        console.log('updating items');
    },[getNumber]);

    return items.map(item => <div key={item}>{item}</div>);

};
function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    // following function re created everytime App function rerender
    // so we need to useCallback to make sure only execute this function if number changes

    const getNumber = useCallback(()=>{
        return [number,number+1,number+2];
    },[number]);

    // difference between useMemo and useCallback
    // useMemo takes a function and return `returned value` of that function
    // other hand useCallback takes a function and return the function


    return (
        <div className="container">
            <div style={themeStyle}>
                <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
                <br/>
                <button className={"btn btn-primary"} onClick={()=>setDark(!dark)}>Toggle</button>
                <List getNumber={getNumber}/>
            </div>
        </div>
    );
}

export default App;
