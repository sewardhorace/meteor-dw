var {
  Link
} = ReactRouter;

Welcome = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="hidden-xs col-sm-2"></div>
          <div className="col-xs-12 col-sm-8">
            <h2>Yo whatup</h2>

            <Signup />
            <SignIn />

            <Link to="/play">play</Link>
            <Link to="/games">browse games</Link>
          </div>
        </div>
      </div>
    );
  }
});
