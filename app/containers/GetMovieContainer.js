var React = require('react');
var PropTypes = React.PropTypes;
var GetMovie = require('../components/GetMovie');

var GetMovieContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    };
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function() {
    return {
      movie: 'The Matrix'
    };
  },
  handleSubmitMovie: function() {
console.log('HELLO', this.state.movie)
  },
  handleUpdateMovie: function(e) {
    this.setState({
      movie: e.target.value
    });
  },
  render: function() {
    return (
      <GetMovie
        direction={this.props.direction}
        onSubmitMovie={this.handleSubmitMovie}
        onUpdateMovie={this.handleUpdateMovie}
        movie={this.state.movie} />
    )
  }
});

module.exports = GetMovieContainer;
