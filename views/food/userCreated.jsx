var React = require('react');

class UserCreated extends React.Component {
  render() {

		const recipe = this.props.userCreatedRecipes.map(recipe => {
			return (
				<li class="list-group-item"><a class="text-dark" href={'/recipe/user/' + recipe.id}>{recipe.title}</a>
                    
					<form action={'/recipe/created/' + recipe.id + '/delete?_method=DELETE'} method="POST">
                        <a href={'/recipe/user/' + recipe.id + '/edit'}><button type="button" class="btn btn-dark profile-edit-button">Edit</button></a>
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

module.exports = UserCreated;