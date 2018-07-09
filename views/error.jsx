var React = require("react");

class Error extends React.Component {
  render() {
    return (

        <div>{this.props.errorMsg}</div>

    );
  }
}

module.exports = Error;
