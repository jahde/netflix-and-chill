var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type="button"
      style={{margin:10}}
      className="btn btn-success"
      onClick={props.onSubmitMovie}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateMovie}
      placeholder='The Matrix'
      type="text"
      value={props.movie} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetMovie (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateMovie={props.onUpdateMovie}
        movie={props.movie} />
      <Button
        onSubmitMovie={props.onSubmitMovie}>
          Get Recommended Movie
      </Button>
    </div>
  )
}

GetMovie.propTypes = {
  direction: PropTypes.string,
  onSubmitMovie: PropTypes.func.isRequired,
  onUpdateMovie: PropTypes.func.isRequired,
  movie: PropTypes.string.isRequired
}

module.exports = GetMovie;
