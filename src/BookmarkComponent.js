import React, {useState} from 'react';

const BookMarkComponent = () => {
    const [bookmarks, setBookmarks] = useState(0);
    const increaseBookmark = ()=>{
        setBookmarks(prevLikes=>prevLikes+1);
    };
    const decreaseBookmark = ()=>{
        setBookmarks(prevLikes=>prevLikes+1);
    };
    return (
        <div className={"col-2 p-5 card"}>
            <button className={"btn btn-lg btn-primary"} onClick={increaseBookmark}>BookMark</button>
            <p className={"m-4"}>Total BookMark {bookmarks}</p>
            <button className={"btn btn-lg btn-danger"} onClick={decreaseBookmark}>Remove BookMark</button>
        </div>
    );
};

export default BookMarkComponent;
