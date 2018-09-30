import React from 'react';
import { isEmpty } from 'lodash';
import Movie from '../components/Movie'

const Movies = ({movies, selectedGenres}) => {
  if(isEmpty(selectedGenres)) {
      return movies.map((movie, i) => <Movie movie={movie} key={i} /> )
  }
  return selectedGenres.map(genreId => {
    const selectedMovies = movies.map(m => m.genre_ids.includes(genreId))
    console.log(selectedMovies)
    return selectedMovies.map((movie, i) => <Movie movie={movie} key={i} /> )
  })
}
export default Movies