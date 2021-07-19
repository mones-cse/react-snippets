import LikeComponents from "./LikeComponent";
import BlogPostComponent from "./BlogPostComponent";
import BookMarkComponent from "./BookmarkComponent";
import Counter from "./counter";

function App() {
    return (
        <div className="container-fluid">
            <div className="row p-5">
                {/*<LikeComponents test={"Props data from app component"} />*/}
                {/*<BlogPostComponent />*/}
                {/*<BookMarkComponent />*/}

                <Counter
                    render={(counts, increaseCount, decreaseCount) => {
                        return (
                            <LikeComponents
                                test={"Props data from app component"}
                                counts={counts}
                                increaseCount={increaseCount}
                                decreaseCount={decreaseCount}
                            />
                        );
                    }}
                />
                <BlogPostComponent />
                <Counter
                    render={(counts, increaseCount, decreaseCount) => {
                        return (
                            <BookMarkComponent
                                // short hand code
                                {...{counts, increaseCount, decreaseCount}}
                                // counts={counts}
                                // increaseCount={increaseCount}
                                // decreaseCount={decreaseCount}
                            />
                        );
                    }}
                />

            </div>
        </div>
    );
};

export default App;
