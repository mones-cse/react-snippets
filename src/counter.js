import React, {useState} from "react";

const Counter = ({ children }) => {

    const [counts, setCounts] = useState(0);
    const increaseCount = () => {
        setCounts(prevLikes => prevLikes + 1);
    };

    const decreaseCount = () => {
        setCounts(prevLikes => prevLikes - 1);
    };
    return children(counts, increaseCount, decreaseCount);
};

export default Counter;
