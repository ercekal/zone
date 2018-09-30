import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniq, flatten, isNil } from 'lodash';
import { fetchMovies, fetchGenres } from '../actions';
import { Movies, Genres, AverageVote } from './';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 3
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

  increment = () => {
    const {number} = this.state
    if (number <= 9.5) {
      this.setState({
        number: number + 0.5
      });
    }
  }

  decrement = () =>{
    const {number} = this.state
    if (number >= 0.5) {
      this.setState({
        number: number - 0.5
      });
    }
  }

  render() {
    const {movies, genres, selectedGenres} = this.props
    const {number, validGenres} = this.state
    if (isNil(movies && genres)) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          <Genres validGenres={validGenres} genres={genres} />
          <AverageVote
            number={number}
            increment={this.increment}
            decrement={this.decrement} />
          <Movies
            movies={movies}
            genres={genres}
            selectedGenres={selectedGenres}
            averageVote={number} />
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