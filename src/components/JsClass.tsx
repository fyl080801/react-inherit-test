import * as React from "react";
import JsBase from "./JsBase";
// const JsBase = require("./JsBase") as Cat;

export class JsClass extends JsBase {
    // constructor() {
    //     super();

        this.testFunc = this._testFunc.bind(this);
    }

    _testFunc() {
        return (
            <div>
                {super.testFunc()}
                <div>js 派生</div>
            </div>
        );
    }
}
