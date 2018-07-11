var React = require('react');

class LayoutContainer extends React.Component {
	render() {
		let loginOut = (
				<li className="nav-item">
					<a className="nav-link" href="/login">Login</a>
				</li>
			);
		if (this.props.loggedIn == 'true') {
			loginOut = (
				<li className="nav-item">
					<a className="nav-link" href="/logout">Logout</a>
				</li>
			);
		}
		return (
			 <html>
				<head>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
					<link rel="stylesheet" href="/css/style.css" />
					<title>FBI</title>
				</head>

				<body>

					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggler">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="toggler">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item">
									<a className="nav-link" href="/">Search<span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/recipe/random">Random</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/recipe/create">Create</a>
								</li>
							</ul>
							<ul className="navbar-nav mr-right mt-2 mt-lg-0">
								<li className="nav-item">
									<a className="nav-link" href="/profile">My Recipes<span className="sr-only">(current)</span></a>
								</li>
								{loginOut}
							</ul>
						</div>
					</nav>

					{this.props.children}

					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>

					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>

					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>

				</body>
			</html> 
		);
	}
}

module.exports = LayoutContainer;