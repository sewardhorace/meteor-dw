GamesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      games: Games.find({}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function () {
    var gameNodes = this.data.games.map(function (game) {
      var timestamp = moment(game.createdAt).format("MMM D h:mm a");
      var charName = "Ramathorn" //user's character, if has one
      var gm = "GM name" //get the username from the gm._id
      return (
        <GameListItem
          key={game._id}
          name={game.name}
          info={game.info}
          gm={gm}
          charName={charName}
        />
      );
    });
    return (
      <div>
        {gameNodes}
      </div>
    );
  }
});

var GameListItem = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div className="row game-box">
        <div className="col-xs-12">
          <strong className="pull-left">
            {this.props.name}
          </strong>
          <small className="pull-right overflow">
            {this.props.info}
          </small>
        </div>
        <div className="col-xs-12">
          <div>
            {this.props.charName}
          </div>
        </div>
      </div>
    );
  }
});
