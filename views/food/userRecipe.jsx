var React = require("react");
var LayoutContainer = require('../layout.jsx');

class UserRecipe extends React.Component {
  render() {


    return (
      <LayoutContainer>
          <div>
            <h1>{this.props.kuku.title}</h1>
            <img src={this.props.kuku.image} />
            <p>Ready in: {this.props.kuku.readyInMinutes} minutes</p>
            <p>Servings: {this.props.kuku.servings}</p>
            Ingredients:{ingredients}
            Steps:{instructions}
          </div>
      </LayoutContainer>
    );
  }
}

module.exports = UserRecipe;
