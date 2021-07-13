import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// create custom hook
export function useTheme(){
    return useContext(ThemeContext);
};

export function ThemeContextProvider(props) {
    const [backgroundColor, setBackgroundColor] = useState("#e5a4a4");
    const toggleBackgroundColor = () => {
        setBackgroundColor(backgroundColor === "#e5a4a4" ? "#7d7a7a" : "#e5a4a4");
    };
    return (
        <ThemeContext.Provider
            // value pass the variables and functions
            value={{ toggleBackgroundColor, backgroundColor }}
        >
            <div className="container bg-light text-center p-5 min-vh-100">
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
}
