var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Home extends React.Component {
    render() {
  
        
            return (
                <div class="boss-container">
                <LayoutContainer loggedIn={this.props.loggedIn}>
                
                    <div className="container-fluid">
                        <div className="search-title">Recipeverse</div>
                        <div className="search-liner">A reverse recipe search app. Find recipes with ingredients you have.</div>
                        <form className="search-form" method="POST" action="/recipe/search">
                            <input id="search-bar" name="searchbar" type="text" placeholder="Eg. eggs, ham, spinach" />
                            <button id="search-button" type="submit"><i class="fa fa-search"></i></button>
                        </form>

                        <br />
                        <br />
                    </div>
                </LayoutContainer>
                </div>
            );
        
    }  
}


module.exports = Home;