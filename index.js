var React = require("react");

module.exports = {
  render: React.render,
  findDOMNode: React.findDOMNode,
  unmountComponentAtNode: React.unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer: function(parentComponent, nextElement, container, cb) {
    React.render(nextElement, container, cb);
  }
};

