import React, {Component} from 'react';
import ThemeContext from "./ThemeContext";
class ClassContextComponent extends Component {
    render() {
        return (
            // we need to use context.consumer because class don't support useContext hooks
            <ThemeContext.Consumer>
                {ctx=>(

                    <div className={"p-5 m-5 rounded-3 border border-dark shadow"} style={{backgroundColor:ctx.backgroundColor}}>
                        {window.console.log(ctx.backgroundColor)}
                        ClassContextComponent
                    </div>
                )}
            </ThemeContext.Consumer>

        );
    }
}

export default ClassContextComponent;