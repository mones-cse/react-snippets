import LikeComponents  from "./LikeComponent";
import BlogPostComponent from "./BlogPostComponent";
import BookMarkComponent from "./BookmarkComponent";

function App() {
    return (
        <div className="container-fluid">
            <div className="row p-5">
                <LikeComponents />
                <BlogPostComponent />
                <BookMarkComponent />
            </div>
        </div>
    );
}

export default App;
