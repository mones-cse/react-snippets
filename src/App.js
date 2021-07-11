import "./App.scss";
import AlertConfirm from "./AlertConfirm";
import { AiFillWarning } from "react-icons/ai";
function App() {
    const onConfirmationHandler = () => {
        console.log("confirmed");
    };
    const handleClick = () => {
        AlertConfirm({
            title: "Are you sure?",
            description: "One you delete. This can't be undone",
            icon: <AiFillWarning size={100} color={"red"} />,
            onConfirmation: onConfirmationHandler,
        });
    };
    return (
        <div className="App">
            <div className={"container"}>
                <button className={"btn btn-primary"} onClick={handleClick}>
                    Click
                </button>
            </div>
        </div>
    );
}

export default App;
