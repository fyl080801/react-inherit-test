"use strict";

const React = require("react");

module.exports = React.createClass({
    render: function() {
        return this.testFunc();
    },

    testFunc: function() {
        return <div>js 基类</div>;
    }
});
