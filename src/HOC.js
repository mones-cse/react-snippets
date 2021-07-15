import React, { useState } from "react";

// HOC is function which accept component, and data
// here it accept component and its initial state ,
// if initial state not passed default value will be 0
function HOC(OldComponent,initialState=0) {
    // newComponent is a component
    const NewComponent = (props) => {
        const [counts, setCounts] = useState(initialState);
        const increaseCount = () => {
            setCounts(prevCount => prevCount + 1);
        };
        const decreaseCount = () => {
            setCounts(prevCount => prevCount - 1);
        };
        return (
            <OldComponent
                counts={counts}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                {...props}
            />
        );
    };
    // HOC function returns new component;
    return NewComponent;
}

export default HOC;
