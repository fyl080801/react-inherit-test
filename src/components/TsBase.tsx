import { Component } from "react";
import * as React from "react";

export class TsBase extends Component {
    render() {
        return this.testFunc();
    }

    testFunc() {
        return <div>ts 基类</div>;
    }
}

export class TsClass extends TsBase {
    testFunc() {
        return (
            <div>
                {super.testFunc()}
                <div>ts 派生</div>
            </div>
        );
    }
}
