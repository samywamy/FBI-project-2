var React = require('react');
var LayoutContainer = require('../layout.jsx');

class Login extends React.Component {
  render() {


    return (
    	<LayoutContainer>
    		<div className="generic-container">
	    	<div className="form-div" style={{width:"500px"}}>
				<h2 style={{marginBottom:"20px"}}>Login</h2>

				<form action="/login" method="POST">
				  <div className="form-group">
				    <input name="email" type="text" className="form-control" placeholder="Email" />
				  </div>

				  <div className="form-group">
				    <input name="password" type="password" className="form-control" placeholder="Password" />
				  </div>
					
				  <div className="form-group">
				    <input name="submit" type="submit" className="btn btn-dark" placeholder="Submit" />
				  </div>
				  <a href="/register" className="text-muted">No account? Sign up.</a>
				</form>

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

module.exports = Login;