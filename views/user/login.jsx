var React = require('react');
var LayoutContainer = require('../layout.jsx');

class Login extends React.Component {
  render() {
    return (
    	<LayoutContainer>
	    	<div>
	    		<form action="/login" method="POST">
	    			<input name="email" type="text" placeholder="Email" />

	    			<input name="password" type="text" placeholder="Password"/>

	    			<input name="submit" type="submit" value="Login" class="buttons"/ >
	    		</form>

	    		<p><a href="/register" class="text-muted">No account? Sign up.</a></p>

	    		<form action="/logout" method="GET">
	    			<input name="submit" type="submit" value="Logout" class="buttons"/ >
	    		</form>


	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Login;