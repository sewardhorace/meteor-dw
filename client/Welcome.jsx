var {
  Link
} = ReactRouter;

Welcome = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Yo whatup</h1>
        <Link to="/items">items</Link>
      </div>
    );
  }
});
