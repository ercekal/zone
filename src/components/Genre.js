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

export default connect(null, mapDispatchToProps)(Genre);