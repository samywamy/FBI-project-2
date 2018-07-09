var React = require("react");
var LayoutContainer = require('../layout.jsx');

class SearchResults extends React.Component {
  render() {
    	const tableRows = this.props.kuku.map(recipe => {
        return (
            <tr>
              <td><img src={recipe.image} /></td>
              <td><a href={'/recipe/' + recipe.id + '/load'}>{recipe.title}</a></td>
            </tr>
          );
      });

      return (
        <LayoutContainer>
          <table>
            {tableRows}
          </table>
        </LayoutContainer>
      );
  }
}

module.exports = SearchResults;



