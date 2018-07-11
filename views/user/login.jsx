var React = require('react');
var LayoutContainer = require('../layout.jsx');

class Login extends React.Component {
  render() {


    return (
    	<LayoutContainer>
    		<div class="generic-container">
	    	<div class="form-div" style={{width:"500px"}}>
				<h2 style={{marginBottom:"20px"}}>Login</h2>

				<form action="/login" method="POST">
				  <div class="form-group">
				    <input name="email" type="text" class="form-control" placeholder="Email" />
				  </div>

				  <div class="form-group">
				    <input name="password" type="password" class="form-control" placeholder="Password" />
				  </div>
					
				  <div class="form-group">
				    <input name="submit" type="submit" class="btn btn-dark" placeholder="Submit" />
				  </div>
				  <a href="/register" class="text-muted">No account? Sign up.</a>
				</form>

	    		<div style={{margin:"50px"}}>
				<form action="/logout" method="GET">
				  <input name="submit" type="submit" value="Logout" class="btn btn-dark" />
				</form>
				</div>


	    	</div>
	    </div>	
    	</LayoutContainer>
    );

  }
}

module.exports = Login;