GameBrowsePage = React.createClass({
  getInitialState: function(){
    return {};
  },
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="hidden-xs col-sm-2"></div>
          <div className="col-xs-12 col-sm-8">
            <h3>Browse All Games</h3>
            <GamesList />
          </div>
        </div>
      </div>
    );
  }
});
