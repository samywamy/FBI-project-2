var React = require("react");
var LayoutContainer = require('../layout.jsx');

class createRecipe extends React.Component {
  render() {
      return (
        <LayoutContainer>

          <div class="generic-container">
            <div class="form-div" style={{width:"800px"}}>
              <h2 style={{marginBottom:"20px"}}>Create a Recipe!</h2>
              <form action="/recipe/create" method="POST">
                <div class="form-group">
                  <label for="title" style={{float:"left"}}>Recipe Title</label>
                  <input name="title" input type="text" class="form-control" />
                  </div>

                <div class="form-group">
                  <label for="ingredients" style={{float:"left"}}>Ingredients</label>
                  <textarea name="ingredients" input type="text" class="form-control" rows="5" />
                </div>

                <div class="form-group">
                  <label for="steps" style={{float:"left"}}>Steps</label>
                  <textarea name="steps" input type="text" class="form-control" rows="5" />
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

module.exports = createRecipe;
