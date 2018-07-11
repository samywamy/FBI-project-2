var React = require('react');
var LayoutContainer = require('../layout.jsx');
var UserSaved = require('../food/userSaved.jsx');
var UserCreated = require('../food/userCreated.jsx');

class Profile extends React.Component {
  render() {




    return (
    	<LayoutContainer loggedIn="true">


			<div className="container">
{/*				<div class="row">
					Row
				</div>
*/}
				<div className="row">

					<div className="col-sm">
				  		<h1>Hello {this.props.username}</h1>
					</div>

					<div className="col-sm">
					  	<h4>Saved Recipes</h4>
					  	<UserSaved userSavedApiRecipes={this.props.savedRecipes} />
					</div>

					<div className="col-sm">
						<h4>Created Recipes</h4>
						<UserCreated userCreatedRecipes={this.props.createdRecipes} />
					</div>

				</div>
			</div>








    		<div className="generic-container">
	    	<div className="form-div" style={{width:"500px"}}>
	    		<div style={{margin:"50px"}}>
				<form action="/logout" method="GET">
				  <input name="submit" type="submit" value="Logout" className="btn btn-dark" />
				</form>
				</div>
	    	</div>
	    </div>	
    	</LayoutContainer>
    );

  }
}

module.exports = Profile;