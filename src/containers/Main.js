import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniq, flatten, isNil } from 'lodash';
import { fetchMovies } from '../actions';
import { Movies, Genres, AverageVote } from './';
import axios from 'axios';

const API_KEY = "b0659a2e955ea3f4ebab1b70f16905bd"

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 3
    }
  }

  componentWillMount() {
    //componentWillMount is becoming deprecated however wanted
    //to show that redux API call can also be done
    this.props.fetchMovies()
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((res) => this.setState({genres: res.data.genres}))
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
    const {movies, selectedGenres} = this.props
    const {number, validGenres, genres} = this.state
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
  return bindActionCreators({ fetchMovies }, dispatch)
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
    // genres: state.genres.genres,
    selectedGenres: state.selectedGenres
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);