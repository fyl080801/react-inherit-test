"use strict";

const React = require("react");

let obj = {
  render: function() {
    return this.testFunc();
  },

  testFunc: function() {
    return <div>js 基类</div>;
  }
};

module.exports = React.createClass(obj);
