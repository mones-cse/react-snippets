import React from "react";

const BlogPostComponent = () => {
    return (
        <div className={"col-8 p-5 card"}>
            <h1>Higher-Order Components</h1>
            <p>
                A higher-order component (HOC) is an advanced technique in React
                for reusing component logic. HOCs are not part of the React API,
                per se. They are a pattern that emerges from React’s
                compositional nature.
            </p>
            <p>
                Concretely, a higher-order component is a function that takes a component and returns a new component.
            </p>
            <span>
                const EnhancedComponent = higherOrderComponent(WrappedComponent);
            </span>
        </div>
    );
};

export default BlogPostComponent;
