var React = require("react");
var LayoutContainer = require('../layout.jsx');

class Recipe extends React.Component {
	render() {
		const ingredients = this.props.kuku.extendedIngredients.map(ingredient => {
			return (
						<p style={{marginBottom: "5px"}}>{ingredient.originalString}</p>
				);
		});

		const instructions = this.props.kuku.analyzedInstructions[0].steps.map(step => {
			return (
					<p>{step.step}</p>
				);
		});  

		return (
			<LayoutContainer loggedIn={this.props.loggedIn}>

				<div class="container">
					<div class="row" style={{marginBottom: "50px"}}>

						<div class="col">
							<img src={this.props.kuku.image} />
						</div>

						<div class="col">
								<h1>{this.props.kuku.title}</h1>
								<form style={{padding: "40px"}} action={'/recipe/' + this.props.kuku.id + '/save'} method="GET">
									<input name="submit" type="submit" value="Save" class="btn btn-danger"/>
								</form>
								<h5>Ready in: {this.props.kuku.readyInMinutes} minutes</h5>
								<h5>Servings: {this.props.kuku.servings}</h5>
						</div>

					</div>

					<div class="row" style={{textAlign: "left"}}>

						<div class="col">
							<h5>Ingredients:</h5>{ingredients}
						</div>

						<div class="col">
							<h5>Steps:</h5>{instructions}
						</div>

					</div>
				</div>  


			</LayoutContainer>
		);
	}
}

module.exports = Recipe;
