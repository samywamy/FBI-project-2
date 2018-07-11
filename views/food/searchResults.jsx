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

    		<div className="col-lg-4 col-md-6 col-sm-12">
    			<div className="card">
    			  <a href={'/recipe/' + recipe.id}>
    			  <img className={recipe.image} src={recipe.image} alt={recipe.title} /></a>
    			  <div className="card-body">
    				  <a className ="text-dark" href={'/recipe/' + recipe.id}>{recipe.title}</a>
            </div>  
    		  </div>
    		</div>
  		);
	  });

	  return (
      <LayoutContainer loggedIn={this.props.loggedIn}>
        <h1 style={{marginBottom:"20px"}}>Meals made with (ingredients)</h1>
        <div className="search-container">
          <div className="row">
          	{recipeCard}
          </div>
        </div>  
  		</LayoutContainer>
	  );
  }
}

module.exports = SearchResults;



