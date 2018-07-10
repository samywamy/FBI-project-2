var React = require("react");
var LayoutContainer = require('../layout.jsx');

class SearchResults extends React.Component {
  render() {
    	const tableRows = this.props.kuku.map(recipe => {
        return (
            <tr>
              <td><a href={'/recipe/' + recipe.id + '/load'}><img src={recipe.image} /></a></td>
              <td><a class ="text-dark" href={'/recipe/' + recipe.id + '/load'}>{recipe.title}</a></td>
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



