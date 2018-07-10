var React = require("react");
var LayoutContainer = require('./layout.jsx');

class Error extends React.Component {
  render() {
    return (
    	<LayoutContainer>
        	<div>{this.props.errorMsg}</div>
        </LayoutContainer>
    );
  }
}

module.exports = Error;
