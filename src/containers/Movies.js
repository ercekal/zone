import React from 'react';
import { isEmpty, sortBy } from 'lodash';
import Movie from '../components/Movie'

const Movies = ({movies, selectedGenres, genres, averageVote}) => {
  const genresList = (movie) => {
    return genres.filter(g => movie.genre_ids.includes(g.id))
  }
  const aboveAverage = (list) => {
    return list.filter(m => m.vote_average >= averageVote)
  }

  if(isEmpty(selectedGenres)) {
    return (
      <div>
        There are {aboveAverage(movies).length} movies within this filters
        {sortBy(aboveAverage(movies), (m) => m.popularity).reverse()
          .map((movie, i) => <Movie movie={movie} genresList={genresList(movie)} key={i} /> )}
      </div>
    )
  }
  return selectedGenres.map(genreId => {
    const selectedMovies = movies.filter(m => {
      return m.genre_ids.includes(genreId)
    })
    return (
      <div>
        There are {aboveAverage(selectedMovies).length} movies within this filters
        {sortBy(aboveAverage(selectedMovies), (m) => m.popularity).reverse()
          .map((movie, i) => <Movie movie={movie} genresList={genresList(movie)} key={i} /> )}
      </div>
    )
  })
}
export default Movies