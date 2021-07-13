import "./App.scss";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import ThemeContext from "./ThemeContext";
import ThemeContextProvider from "./ThemeContextProvider";

function App() {
    return (
        <ThemeContextProvider>
            <div className="container bg-light text-center p-5 min-vh-100">
                {/* Since provider declare here we can't use useContext hooks here so use context.consumer*/}
                <ThemeContext.Consumer>
                    {ctx=>(
                        <button className={"btn-lg btn-primary btn-outline-dark"} onClick={ctx.toggleBackgroundColor}> Toggle Theme</button>
                    )}
                </ThemeContext.Consumer>

                <FunctionContextComponent />
                <ClassContextComponent />
            </div>
        </ThemeContextProvider>
    );
}

export default App;
