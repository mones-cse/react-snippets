import React, {useState} from 'react';
import HOC from './HOC';
const BookMarkComponent = (props) => {
    // following code handled by hoc
    // const [bookmarks, setBookmarks] = useState(0);
    // const increaseBookmark = ()=>{
    //     setBookmarks(prevLikes=>prevLikes+1);
    // };
    // const decreaseBookmark = ()=>{
    //     setBookmarks(prevLikes=>prevLikes+1);
    // };
    return (
        <div className={"col-2 p-5 card"}>
            <button className={"btn btn-lg btn-primary"} onClick={props.increaseCount}>BookMark</button>
            <p className={"m-4"}>Total BookMark {props.counts}</p>
            <button className={"btn btn-lg btn-danger"} onClick={props.decreaseCount}>Remove BookMark</button>
        </div>
    );
};

export default HOC(BookMarkComponent);
