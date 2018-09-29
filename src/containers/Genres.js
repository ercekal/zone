import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {uniq, flatten, isNil} from 'lodash';
import { fetchMovies, fetchGenres } from '../actions';
import {MoviesList} from './components'

class Movies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validGenres: []
    }
  }

  componentWillMount() {
    this.props.fetchGenres()
  }

  componentWillReceiveProps(nextProps) {
    const {movies} = nextProps
    const genresList = movies.map(m => {
      return m.genre_ids
    })
    this.setState({
      validGenres: uniq(flatten(genresList))
    })
  }

  render() {
    const {movies, genres} = this.props
    if (isNil(movies && genres)) {
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