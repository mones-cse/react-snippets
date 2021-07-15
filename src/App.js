import ReactDOM from "react-dom";

function App() {
    const child = <div className={"text-center bg-info"}>Every body</div>;
    const container = document.getElementById("modal-root");

    return (
        <div className="Container">
            <div className={"bg-light col-8 m-auto h-25 text-center"}>
                Hello
            </div>
            {ReactDOM.createPortal(child, container)}
        </div>
    );
}

export default App;
