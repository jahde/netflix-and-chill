var React = require('react');
var GetMovieContainer = require('./GetMovieContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // background: 'rgba(206, 0, 0, 0.89)',
    background: '#000',
    color: '#fff',
    padding: 5
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{margin:0}}>Netflix and Chill</h2>
          <GetMovieContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
