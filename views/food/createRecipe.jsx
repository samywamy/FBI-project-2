var React = require("react");
var LayoutContainer = require('../layout.jsx');

class createRecipe extends React.Component {
  render() {
      return (
        <LayoutContainer>
          <div>
            <form action="/recipe/create" method="POST">
              <input name="title" type="text" placeholder="Recipe Title" />
              <input name="ingredients" type="text" placeholder="Ingredients"/>
              <input name="steps" type="text" placeholder="Steps"/>
              <input name="submit" type="submit" />
            </form>
          </div>
        </LayoutContainer>
    );
  }
}

module.exports = createRecipe;
