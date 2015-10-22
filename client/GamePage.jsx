GamePage = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h1>Game on, baby</h1>
            <GameplayBox />
          </div>
        </div>

      </div>
    );
  }
});
