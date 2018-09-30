import React from 'react';
import { isEmpty } from 'lodash';
import Movie from '../components/Movie'

const Movies = ({movies, selectedGenres, genres}) => {
  const genresList = (movie) => {
    return genres.filter(g => movie.genre_ids.includes(g.id))
  }
  if(isEmpty(selectedGenres)) {
    return movies.map((movie, i) => <Movie movie={movie} genresList={genresList(movie)} key={i} /> )
  }
  return selectedGenres.map(genreId => {
    const selectedMovies = movies.filter(m => {
      return m.genre_ids.includes(genreId)
    })
    return selectedMovies.map((movie, i) => <Movie movie={movie} genresList={genresList(movie)} key={i} /> )
  })
}
export default Movies