var React = require("react");
var LayoutContainer = require('../layout.jsx');

class SearchResults extends React.Component {
	render() {
	 // const tableRows = this.props.kuku.map(recipe => {
	 //    return (
	 //        <tr>
	 //          <td><a href={'/recipe/' + recipe.id + '/load'}><img src={recipe.image} /></a></td>
	 //          <td><a class ="text-dark" href={'/recipe/' + recipe.id + '/load'}>{recipe.title}</a></td>
	 //        </tr>
	 //      );
	 //  });

// <td><a href={'/recipe/' + recipe.id + '/load'}><img src={recipe.image} /></a></td>
// <td><a class ="text-dark" href={'/recipe/' + recipe.id + '/load'}>{recipe.title}</a></td>



	  const recipeCard = this.props.kuku.map(recipe => {
  		return (
  		  <div class="col-lg-4 col-md-6 col-sm-12">
  			<div class="card">
  			  <a href={'/recipe/' + recipe.id + '/load'}>
  			  <img class={recipe.image} src={recipe.image} alt={recipe.title} /></a>
  			  <div class="card-body">
  				<a class ="text-dark" href={'/recipe/' + recipe.id + '/load'}>{recipe.title}</a>
  			  </div>
  			</div>
  		  </div> 
  		);
	  });

	  return (
  	  <LayoutContainer>

        <div class="row">
        	{recipeCard}
        </div>

  		</LayoutContainer>
	  );
  }
}

module.exports = SearchResults;



