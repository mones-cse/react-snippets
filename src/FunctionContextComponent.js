import React from "react";
import { useTheme } from "./ThemeContextProvider";

const FunctionContextComponent = () => {
    // use custom hooks
    const ctx = useTheme();
    return (
        <div>
            <button
                className={"btn-lg btn-primary btn-outline-dark"}
                onClick={ctx.toggleBackgroundColor}
            >
                Toggle Theme
            </button>

            <div
                className={"p-5 m-5 rounded-3 border border-dark shadow "}
                style={{ backgroundColor: ctx.backgroundColor }}
            >
                FunctionContextComponent
            </div>
        </div>
    );
};

export default FunctionContextComponent;
