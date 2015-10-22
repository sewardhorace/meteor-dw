App = React.createClass({
  getInitialState: function() {
      return {};
  },
  render: function () {
    return (
      <div>
        <small>This will always be here</small>
        <div>
          {/* This is where our view components will be rendered */}
          {this.props.children}
        </div>
      </div>
    );
  }
});

// // App component - represents the whole app
// App = React.createClass({
//
//   // This mixin makes the getMeteorData method work
//   mixins: [ReactMeteorData],
//
//   // Loads items from the Tasks collection and puts them on this.data.tasks
//   getMeteorData() {
//     return {
//       tasks: Characters.find({}).fetch()
//     }
//   },
//
//   renderCharacters() {
//     return this.data.tasks.map((task) => {
//       return <Character key={character._id} character={character} />;
//     });
//   },
//
//   handleSubmit(event) {
//     event.preventDefault();
//
//     // Find the text field via the React ref
//     var name = React.findDOMNode(this.refs.nameInput).value.trim();
//
//     Characters.insert({
//       name: name,
//       createdAt: new Date() // current time
//     });
//
//     // Clear form
//     React.findDOMNode(this.refs.nameInput).value = "";
//   },
//
//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>Dungeon World</h1>
//
//           <form className="new-character" onSubmit={this.handleSubmit} >
//             <input
//               type="text"
//               ref="nameInput"
//               placeholder="Name"
//               disabled="true" />
//           </form>
//
//         </header>
//       </div>
//     );
//   }
// });
