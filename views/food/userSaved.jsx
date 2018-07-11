var React = require('react');

class UserSaved extends React.Component {
	render() {

		const recipe = this.props.userSavedApiRecipes.map(recipe => {
			return (
				<li class="list-group-item">{recipe.title}
					<form action={'/recipe/saved/' + recipe.api_id + '/delete?_method=DELETE'} method="POST">
				        <input type="submit" value="DELETE" />
					</form>
				</li>
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