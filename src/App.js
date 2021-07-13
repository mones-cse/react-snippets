import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeContextProvider,useTheme } from "./ThemeContextProvider";
import React from "react";


function App() {
    return (
        <ThemeContextProvider>
            <FunctionContextComponent />
        </ThemeContextProvider>
    );
}

export default App;
