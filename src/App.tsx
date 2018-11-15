import * as React from "react";
import "./App.css";
import { JsClass } from "./components/JsClass";
import { TsClass } from "./components/TsBase";

class App extends React.Component {
    public render() {
        let jsC = new JsClass();
        let tsC = new TsClass({}, {});
        return (
            <div>
                <div style={{ color: "red" }}>{jsC.testFunc()}</div>
                <div style={{ color: "blue" }}>{tsC.testFunc()}</div>
            </div>
        );
    }
}

export default App;
