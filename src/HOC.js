import React, { useState } from "react";

// HOC is function which accept component
function HOC(OldComponent) {
    // newComponent is a component
    const NewComponent = () => {
        const [counts, setCounts] = useState(0);
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
            />
        );
    };
    // HOC function returns new component;
    return NewComponent;
}

export default HOC;
