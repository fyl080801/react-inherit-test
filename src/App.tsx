import * as React from "react";
import { JsClass } from "./components/JsClass";
import { TsClass } from "./components/TsBase";

class App extends React.Component {
    public render() {
        let jsC = new JsClass();
        let tsC = new TsClass({}, {});

        console.log(jsC);
        console.log(tsC);
        return (
            <div>
                <div style={{ color: "red" }}>{jsC.testFunc()}</div>
                <div style={{ color: "blue" }}>{tsC.testFunc()}</div>
            </div>
        );
    }
}

export default App;
