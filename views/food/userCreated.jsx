var React = require('react');
var LayoutContainer = require('../layout.jsx');

class UserCreated extends React.Component {
  render() {

		const recipe = this.props.userCreatedRecipes.map(recipe => {
			return (
				<li class="list-group-item">{recipe.title}</li>
			);
		});


		return (

			<ul class="list-group">
				{recipe}
			</ul>

		);
	}
}

module.exports = UserCreated;