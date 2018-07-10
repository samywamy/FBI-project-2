var React = require('react');
var LayoutContainer = require('../layout.jsx');

class Register extends React.Component {
  render() {
    return (
    	<LayoutContainer>
	    	<div>
	    		<form action="/register" method="POST">
	    			<input name="email" type="text" placeholder="Email" />
	    			<input name="password" type="text" placeholder="Password" />
	    			<input name="submit" type="submit" class="buttons" />
	    		</form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = Register;