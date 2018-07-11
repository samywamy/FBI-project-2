var React = require("react");
var LayoutContainer = require('../layout.jsx');

class SearchResults extends React.Component {
	render() {

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
        <h1 style={{marginBottom:"20px"}}>Meals made with {this.props.ingredients}</h1>
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



