var React = require('react');

class UserCreated extends React.Component {
  render() {

		const recipe = this.props.userCreatedRecipes.map(recipe => {
			return (
				<li class="list-group-item">{recipe.title}
					<form action={'/recipe/created/' + recipe.id + '/delete?_method=DELETE'} method="POST">
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

module.exports = UserCreated;