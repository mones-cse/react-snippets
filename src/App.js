import Like from "./Like";
import LikeComponent from "./Like";
import BlogPostComponent from "./BlogPostComponent";
import BookMarkComponent from "./BookmarkComponent";

function App() {
    return (
        <div className="container-fluid">
            <div className="row p-5">
                <LikeComponent />
                <BlogPostComponent />
                <BookMarkComponent />
            </div>
        </div>
    );
}

export default App;
