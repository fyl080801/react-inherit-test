import * as React from "react";

const JsBase = require("./JsBase");

export class JsClass extends JsBase {
    // constructor() {
    //     super();

    //     // this.testFunc = this._testFunc.bind(this);
    // }

    testFunc() {
        return (
            <div>
                {super.testFunc()}
                <div>js 派生</div>
            </div>
        );
    }
}
