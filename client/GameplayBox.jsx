GameplayBox = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      narigraphs: Narigraphs.find({}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <h3>Gameplay Log</h3>
        <NarigraphList narigraphs={this.data.narigraphs}/>
        <NarigraphForm />
      </div>
    );
  }
});

var NarigraphList = React.createClass({
  snapToBottom: function(scrollingElement){
    setTimeout(function() {
      scrollingElement.scrollTop(scrollingElement[0].scrollHeight);
    }, 1);
  }, //TODO this shouldn't be attached to this class
  componentDidMount: function(){
    this.snapToBottom($('.narigraph-list'));
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.narigraphs.length != prevProps.narigraphs.length){
      this.snapToBottom($('.narigraph-list'));
    }
  },
  render: function() {
    var narigraphNodes = this.props.narigraphs.map(function (narigraph) {
      var timestamp = moment(narigraph.createdAt).format("MMM D h:mm a");
      return (
        <Narigraph
          key={narigraph._id}
          author={narigraph.charName}
          text={narigraph.text}
          timestamp={timestamp}
        ></Narigraph>
      );
    });
    return (
      <div className="narigraph-list">
        {narigraphNodes}
      </div>
    );
  }
});

var Narigraph = React.createClass({
  render: function() {
    return (
      <div className="bold-narigraph">
        <p className="message">{this.props.text}</p>
        <div className="narigraph-salutation">
          <p>
            <strong>- {this.props.author}</strong>
            <small>{this.props.timestamp}</small>
          </p>
        </div>
      </div>
    );
  }
});

var NarigraphForm = React.createClass({
  valid: function(){
    // if (window.user.character_name != "") {
    //   return true;
    // } else {
    //   return false;
    // }
    //TODO
    return true;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    Narigraphs.insert({
      text: text,
      charName: "Charlie Chin",
      createdAt: new Date()
    });
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
       <div className="form-group">
        <textarea disabled={!this.valid} className="form-control narigraph-textarea" type="text" placeholder="What do you do?" ref="text" rows="3"/>
        <input type="submit" value="Post" className="form-control btn btn-default"/>
        </div>
      </form>
    );
  }
});
