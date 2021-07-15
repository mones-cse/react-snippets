import React, {useState} from "react";

const LikeComponent = () => {
    const [likes, setLikes] = useState(0);
    const increaseLike = ()=>{
        setLikes(prevLikes=>prevLikes+1);
    };

    const decreaseLike = ()=>{
        setLikes(prevLikes=>prevLikes-1);
    };
    return (
        <div className={"col-2 p-5 card text-center"}>
            <button className={"btn btn-lg btn-primary"} onClick={increaseLike}>Like</button>
            <p className={"m-4"}>Total like {likes}</p>
            <button className={"btn btn-lg btn-danger"} onClick={decreaseLike}>Dislike</button>
        </div>
    );
};

export default LikeComponent;
