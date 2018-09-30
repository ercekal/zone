import React, { Component } from 'react';
import Genre from '../components/Genre';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { selectGenre } from '../actions';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`
class Genres extends Component {

  constructor(props) {
    super(props)
  }

  renderValidGenres = () => {
    const {validGenres, genres} = this.props
    const genreList = genres.filter(genre => validGenres.includes(genre.id))
    return genreList.map((genre, i) => <Genre genre={genre} onChange={(e) => this.onGenreChange(genre, e)} key={i} />)
  }

  onGenreChange = (genre) => {
    this.props.selectGenre(genre)
  }

  render() {
    const {validGenres, genres} = this.props
    return <StyledDiv>{this.renderValidGenres()}</StyledDiv>
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGenre }, dispatch)
}

export default connect(null, mapDispatchToProps)(Genres);