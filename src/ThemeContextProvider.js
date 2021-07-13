import React, {useState} from 'react';
import ThemeContext from "./ThemeContext";
const ThemeContextProvider = (props) => {
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const toggleBackgroundColor = ()=>{
        setBackgroundColor(backgroundColor==="#fff"?"#7d7a7a":"#fff");
    };
    return (
        <ThemeContext.Provider
            value={{toggleBackgroundColor,backgroundColor}}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
