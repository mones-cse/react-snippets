import React, {useState} from "react";
import HOC from "./HOC";
const LikeComponent = (props) => {
    // following code handled by hoc
    // const [likes, setLikes] = useState(0);
    // const increaseLike = ()=>{
    //     setLikes(prevLikes=>prevLikes+1);
    // };
    //
    // const decreaseLike = ()=>{
    //     setLikes(prevLikes=>prevLikes-1);
    // };
    return (
        <div className={"col-2 p-5 card text-center"}>
            <button className={"btn btn-lg btn-primary"} onClick={props.increaseCount}>Like</button>
            <p className={"m-4"}>Total like {props.counts}</p>
            <button className={"btn btn-lg btn-danger"} onClick={props.decreaseCount}>Dislike</button>
        </div>
    );
};

export default HOC(LikeComponent);
