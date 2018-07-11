var React = require('react');
var LayoutContainer = require('../layout.jsx');

class Register extends React.Component {
  render() {
    return (
    	<LayoutContainer>
    		<div class="generic-container">
		    	<div class="form-div" style={{width:"500px"}}>
		    		<h2 style={{marginBottom:"20px"}}>Sign Up</h2>
					<form action="/register" method="POST">

					  <div class="form-group">
					    <input name="name" type="text" class="form-control" placeholder="Name" />
					  </div>				

					  <div class="form-group">
					    <input name="email" type="email" class="form-control" placeholder="Email" />
					  </div>

					  <div class="form-group">
					    <input name="password" type="password" class="form-control" placeholder="Password" />
					  </div>
						
					  <div class="form-group">
					    <input name="submit" type="submit" class="btn btn-dark" placeholder="Submit" />
					  </div>
					</form>
		    	</div>
		    </div>	
    	</LayoutContainer>
    );

  }
}

module.exports = Register;



				<form action="/register" method="POST">
				  <div class="form-group">
				    <h2 style={{marginBottom:"20px"}}>Login</h2>
				    <input name="email" type="email" class="form-control" placeholder="Email" />
				  </div>

				  <div class="form-group">
				    <input name="password" type="password" class="form-control" placeholder="Password" />
				  </div>
					
				  <div class="form-group">
				    <input name="submit" type="submit" class="btn btn-dark" placeholder="Submit" />
				  </div>
				</form>