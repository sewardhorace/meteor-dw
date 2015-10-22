ChatBox = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      chats: Chats.find({}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className="small-gutter chat-component">
        <h3>Chat:</h3>
        <ChatList chats={this.data.chats}/>
        <ChatForm />
      </div>
    );
  }
});

var ChatList = React.createClass({
  snapToBottom: function(scrollingElement){
    setTimeout(function() {
      scrollingElement.scrollTop(scrollingElement[0].scrollHeight);
    }, 1);
  },
  componentDidMount: function() {
    this.snapToBottom($('.chat-list'));
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.chats.length != prevProps.chats.length){
      this.snapToBottom($('.chat-list'));
    }
  },
  render: function() {
    var chatNodes = this.props.chats.map(function (chat) {
      var timestamp = moment(chat.createdAt).format("MMM D, h:mm a");
      return (
        <div>
          <Chat
            key={chat._id}
            author={chat.username}
            text={chat.text}
            timestamp={timestamp}
          ></Chat>
        </div>
      );
    });
    return (
      <div className="chat-list">
        {chatNodes}
      </div>
    );
  }
});

var Chat = React.createClass({
  render: function() {
    return (
      <div className="chat-box">
          <p>{this.props.text}</p>
          <div>
            <p className="salutation">
              <strong>{this.props.author}</strong>
              <small>{this.props.timestamp}</small>
            </p>
          </div>
      </div>
    );
  }
});

var ChatForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    Chats.insert({
      text: text,
      username: "Yooser",
      createdAt: new Date()
    });
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea className="form-control chat-textarea" type="text" ref="text" rows="2" placeholder="Chat out of character"/>
          <input className="form-control" type="submit" value="Post" />
        </div>
      </form>
    );
  }
});
