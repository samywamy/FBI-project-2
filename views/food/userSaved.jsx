var React = require('react');

class UserSaved extends React.Component {
	render() {

		const recipe = this.props.userSavedApiRecipes.map(recipe => {
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

module.exports = UserSaved;