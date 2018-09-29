import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {isEmpty} from 'lodash';
import { fetchMovies, fetchGenres } from '../actions/index';

class Movies extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.fetchMovies()
    this.props.fetchGenres()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if(!isEmpty(nextProps.movies)) {
      console.log(nextProps)
    }
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
  return bindActionCreators({ fetchMovies, fetchGenres }, dispatch)
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);