var React = require("react");
var LayoutContainer = require('../layout.jsx');

class createRecipe extends React.Component {
  render() {
      return (
        <LayoutContainer>

          <div class="generic-container">
            <div class="form-div" style={{width:"800px"}}>
              <h2 style={{marginBottom:"20px"}}>Edit Recipe</h2>
              <form action={"/recipe/user/" + this.props.kuku.id + "/update?_method=PUT"} method="POST">
                <div class="form-group">
                  <label for="title" style={{float:"left"}}>Recipe Title</label>
                  <input name="title" input type="text" class="form-control" value={this.props.kuku.title}/>
                  </div>

                <div class="form-group">
                  <label for="ingredients" style={{float:"left"}}>Ingredients</label>
                  <textarea name="ingredients" input type="text" class="form-control" rows="5" value={this.props.kuku.ingredients}/>
                </div>

                <div class="form-group">
                  <label for="steps" style={{float:"left"}}>Steps</label>
                  <textarea name="steps" input type="text" class="form-control" rows="5" value={this.props.kuku.directions}/>
                </div>

                <div class="form-group">
                  <input name="submit" type="submit" class="btn btn-dark" placeholder="Update" />
                </div>                
              </form>
            </div>
          </div>

        </LayoutContainer>
    );
  }
}

module.exports = createRecipe;
