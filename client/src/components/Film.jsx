var React = require("react");

var Film = React.createClass({
  propTypes: {
    director: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  },

  render: function(){
    // console.log(this.props.filmPage)
    return (
      <div className="film">
        <a href={this.props.filmPage}> { this.props.children } </a>
      </div>
      );
  }

});

module.exports = Film;