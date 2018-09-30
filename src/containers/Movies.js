import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {uniq, flatten, isNil} from 'lodash';
import { fetchMovies, fetchGenres } from '../actions/index';

export default class Movies extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // const {movies} = this.props
      return (
        // movies.map(movie => <Movie movie={movie} /> )
        <div>
          yolo
        </div>
      )
    }
  }
