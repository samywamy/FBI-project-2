var React = require('react');

class UserSaved extends React.Component {
	render() {

		const recipe = this.props.userSavedApiRecipes.map(recipe => {
			return (
				<li class="list-group-item"><a class="text-dark" href={'/recipe/' + recipe.api_id}>{recipe.title}</a>
					<form action={'/recipe/saved/' + recipe.api_id + '/delete?_method=DELETE'} method="POST">
				        <input type="submit" value="Delete" class="btn btn-dark" style={{fontSize: "12px"}}/>
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