import React, {useState} from "react";

const Counter = ({ render }) => {
    const [counts, setCounts] = useState(0);
    const increaseCount = () => {
        setCounts(prevLikes => prevLikes + 1);
    };

    const decreaseCount = () => {
        setCounts(prevLikes => prevLikes - 1);
    };
    return render(counts,increaseCount,decreaseCount);
};

export default Counter;
