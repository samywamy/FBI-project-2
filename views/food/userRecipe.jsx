var React = require("react");
var LayoutContainer = require('../layout.jsx');

class UserRecipe extends React.Component {
  render() {


    return (
      <LayoutContainer>
          <div class="container">
            <h1>Title: {this.props.kuku.title}</h1>
            <p>Ingredients: {this.props.kuku.ingredients}</p>
            <p>Steps: {this.props.kuku.directions}</p>
          </div>
      </LayoutContainer>
    );
  }
}

module.exports = UserRecipe;
