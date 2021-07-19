import React, { useState } from "react";

const LikeComponent = ({counts, increaseCount, decreaseCount,test}) => {
    // following code handled by hoc
    // const [counts, setCounts] = useState(0);
    // const increaseCount = () => {
    //     setCounts(prevLikes => prevLikes + 1);
    // };
    //
    // const decreaseCount = () => {
    //     setCounts(prevLikes => prevLikes - 1);
    // };
    return (
        <div className={"col-2 p-5 card text-center"}>
            <button
                className={"btn btn-lg btn-primary"}
                onClick={increaseCount}
            >
                Like
            </button>
            <p className={"m-4"}>Total like {counts}</p>
            <button className={"btn btn-lg btn-danger"} onClick={decreaseCount}>
                Dislike
            </button>

            <p>{test}</p>
        </div>
    );
};

export default LikeComponent;
