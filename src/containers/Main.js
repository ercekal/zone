import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniq, flatten, isNil } from 'lodash';
import { fetchMovies, fetchGenres } from '../actions';
import { Movies, Genres, PopularityFilter } from './';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {}
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
    const {movies, genres, selectedGenres} = this.props
    if(selectedGenres.length > 0) console.log('selectedGenres', selectedGenres)
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
          <Movies movies={movies} selectedGenres={selectedGenres} />
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
  return {
    movies: state.movies.movies,
    genres: state.genres.genres,
    selectedGenres: state.selectedGenres
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);