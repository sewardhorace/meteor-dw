SignIn = React.createClass({
  getInitialState: function(){
    return {};
  },
  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if ( !(username && password) ) {
      return;
    }
    Meteor.loginWithPassword(username, password);
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },
  //TODO validation not working
  valid: function () {
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (username && password) {
      return true;
    } else {
      return false;
    }
  },
  render: function(){
    return (
      <div className="col-xs-6">
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
         <div className="form-group">
          <input className="form-control" type="text" placeholder="username" ref="username"/>
          <input className="form-control" type="password" placeholder="password" ref="password"/>
          <input disabled={!this.valid} type="submit" value="Submit" className="form-control btn btn-default"/>
          </div>
        </form>
      </div>
    );
  }
});
