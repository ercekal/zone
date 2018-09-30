import React from 'react';
import { isEmpty, sortBy, intersection } from 'lodash';
import Movie from '../components/Movie'

const Movies = ({movies, selectedGenres, genres, averageVote}) => {
  // gets the collection of genre details of a movie
  const genresList = (movie) => {
    return genres.filter(g => movie.genre_ids.includes(g.id))
  }
  //filters the list of movies based on the average vote
  const aboveAverage = (list) => {
    return list.filter(m => m.vote_average >= averageVote)
  }

  const renderMovies = (list) => {
    if (isEmpty(list)) return null
    //sorts the array by popularity and reverses it to descending order
    return sortBy(aboveAverage(list), (m) => m.popularity).reverse()
      .map((movie, i) =>
        <Movie movie={movie} genresList={genresList(movie)} key={i} />
      )
  }
  const movieAmount = (list) => {
    return `There are ${list.length} movies within this filters`
  }

  if(isEmpty(selectedGenres)) {
    return (
      <div>
        {movieAmount(aboveAverage(movies))}
        {renderMovies(aboveAverage(movies))}
      </div>
    )
  }

  const selectedMovies = movies.filter(m => {
    //checks if a movie's genre is included in selectedGenres
    return !isEmpty(intersection(m.genre_ids, selectedGenres))
  })

  return (
    <div>
      {movieAmount(aboveAverage(selectedMovies))}
      {renderMovies(aboveAverage(selectedMovies))}
    </div>
  )
}
export default Movies