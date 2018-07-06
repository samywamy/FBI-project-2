var React = require("react");

class Recipe extends React.Component {
  render() {
  	const ingredients = this.props.kuku.extendedIngredients.map(ingredient => {
      return (
	        <ul style={{listStyleType: 'none'}}>
	          <li>{ingredient.originalString}</li>
	        </ul>
        );
    });

    const instructions = this.props.kuku.analyzedInstructions[0].steps.map(step => {
      return (
          <p>{step.step}</p>
        );
    });  

    return (
      <html>
        <head />
        <body>
          <div>
            <h1>{this.props.kuku.title}</h1>
            <img src={this.props.kuku.image} />
            <p>Ready in: {this.props.kuku.readyInMinutes} minutes</p>
            <p>Servings: {this.props.kuku.servings}</p>
            Ingredients:{ingredients}
            Steps:{instructions}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipe;
