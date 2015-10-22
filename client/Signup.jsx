Signup = React.createClass({
  getInitialState: function(){
    return {};
  },
  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var confirm = React.findDOMNode(this.refs.confirm).value.trim();
    if ( !(username && email && password && confirm) || !(password === confirm) ) {
      return;
    }
    Accounts.createUser(
      {
        username: username,
        email: email,
        password: password
      },
      function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Created Account and logged in as " + username);
        }
      }
    );
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.email).value = '';
    React.findDOMNode(this.refs.password).value = '';
    React.findDOMNode(this.refs.confirm).value = '';
    return;
  },
  //TODO validation not working
  valid: function () {
    var username = React.findDOMNode(this.refs.username).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var confirm = React.findDOMNode(this.refs.confirm).value.trim();
    if (username && email && password && confirm) {
      return true;
    } else {
      return false;
    }
  },
  render: function(){
    return (
      <div className="col-xs-6">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
         <div className="form-group">
          <input className="form-control" type="text" placeholder="username" ref="username"/>
          <input className="form-control" type="text" placeholder="email" ref="email"/>
          <input className="form-control" type="password" placeholder="password" ref="password"/>
          <input className="form-control" type="password" placeholder="confirm password" ref="confirm"/>
          <input disabled={!this.valid} type="submit" value="Submit" className="form-control btn btn-default"/>
          </div>
        </form>
      </div>
    );
  }
});
