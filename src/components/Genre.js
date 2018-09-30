import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {uniq, flatten, isNil} from 'lodash';
import { fetchMovies, fetchGenres } from '../actions';

class Genre extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  componentWillMount() {
    this.props.fetchMovies()
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
    const {genre} = this.props
    return(
      <div>
        <input type="checkbox" onChange={this.props.onChange} defaultChecked={this.state.checked}/>
        <p>{genre.name}</p>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Genre);