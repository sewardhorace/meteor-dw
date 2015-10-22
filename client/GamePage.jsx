GamePage = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="hidden-xs col-md-1"></div>
          <div className="col-xs-12 col-sm-8">
            <GameplayBox />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <ChatBox />
          </div>
        </div>

      </div>
    );
  }
});
