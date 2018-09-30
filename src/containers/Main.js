import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {uniq, flatten, isNil} from 'lodash';
import { fetchMovies, fetchGenres } from '../actions';
import {Movies, Genres, PopularityFilter} from './';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMovies: []
    }
  }

  componentWillMount() {
    this.props.fetchGenres()
    this.props.fetchMovies()
  }

  componentWillReceiveProps(nextProps) {
    const {movies} = nextProps
    if (movies) {
      const genresList = movies.map(m => {
        return m.genre_ids
      })
      this.setState({
        validGenres: uniq(flatten(genresList))
      })
    }
  }

  render() {
    const {movies, genres, validGenres} = this.props
    console.log(movies, genres)
    if (isNil(movies && genres)) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          <Genres validGenres={this.state.validGenres} genres={genres} />
          <PopularityFilter />
          <Movies movies={movies} />
          Hello
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, fetchGenres }, dispatch)
}

function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies.movies,
    genres: state.genres.genres,
    selectedGenres: state.selectedGenres.selectedGenres
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);