import React, { Component } from 'react';
import Genre from '../components/Genre';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGenre } from '../actions';

class Genres extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validGenres: []
    }
  }

  renderValidGenres = () => {
    const {validGenres, genres} = this.props
    const genreList = genres.filter(genre => validGenres.includes(genre.id))
    return genreList.map(genre => <Genre genre={genre} onChange={(e) => this.onGenreChange(genre, e)} />)
  }

  onGenreChange = (genre) => {
    this.props.selectGenre(genre)
  }

  render() {
    const {validGenres, genres} = this.props
    console.log(validGenres, genres)
    return this.renderValidGenres()
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGenre }, dispatch)
}

export default connect(null, mapDispatchToProps)(Genres);