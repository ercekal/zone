import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';

class Movies extends Component {

  componentWillMount() {
    this.props.fetchMovies()
  }

  render() {
    if (!this.props.movies) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      console.log(this.props);
      return (
        <div>Hello world</div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch)
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);