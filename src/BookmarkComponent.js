import React, { useState } from "react";

const BookMarkComponent = props => {
    // following code handled by hoc
    const [counts, setCounts] = useState(0);
    const increaseCount = () => {
        setCounts(prevLikes => prevLikes + 1);
    };

    const decreaseCount = () => {
        setCounts(prevLikes => prevLikes - 1);
    };
    return (
        <div className={"col-2 p-5 card"}>
            <button
                className={"btn btn-lg btn-primary"}
                onClick={increaseCount}
            >
                BookMark
            </button>
            <p className={"m-4"}>Total BookMark {counts}</p>
            <button className={"btn btn-lg btn-danger"} onClick={decreaseCount}>
                Remove BookMark
            </button>
        </div>
    );
};

export default BookMarkComponent;
