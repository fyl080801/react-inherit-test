"use strict";

const React = require("react");

// var x = function() {
//     return {};
// };
// x.prototype.testFunc = function() {
//     return <div>js 基类</div>;
// };

const exp = React.createClass({
    render: function() {
        return this.testFunc();
    },

    testFunc: function() {
        return <div>js 基类</div>;
    }
});

console.log(exp);

// const exp = React.createClass(x);

export default exp;
