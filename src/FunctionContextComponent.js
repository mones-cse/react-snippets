import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
const FunctionContextComponent = () => {
    // since it is functional component no need to use context.consumer. just use useContext hooks
    const ctx = useContext(ThemeContext);
    return (
        <div className={"p-5 m-5 rounded-3 border border-dark shadow "} style={{backgroundColor:ctx.backgroundColor}}>
            FunctionContextComponent
        </div>
    );
};

export default FunctionContextComponent;
