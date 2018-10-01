import React, {PureComponent} from 'react';
import { isEmpty, sortBy } from 'lodash';
import Movie from './Movie'

class Movies extends PureComponent {
  // gets the collection of genre details of a movie
  genresList(movie) {
    return this.props.genres.filter(g => movie.genre_ids.includes(g.id))
  }
  //filters the list of movies based on the average vote
  aboveAverage(list) {
    return list.filter(m => m.vote_average >= this.props.averageVote)
  }

  renderMovies(list) {
    if (isEmpty(list)) return null
    //sorts the array by popularity and reverses it to descending order
    return sortBy(this.aboveAverage(list), (m) => m.popularity).reverse()
      .map((movie, i) =>
        <Movie movie={movie} genresList={this.genresList(movie)} key={i} />
      )
  }
  movieAmount(list) {
    const isPlural = list.length > 1
    return `There ${isPlural ? 'are' : 'is'} ${list.length} movie${isPlural ? 's' : ''} within this filters`
  }

  renderList(list) {
    return (
      <div>
        {this.movieAmount(this.aboveAverage(list))}
        {this.renderMovies(this.aboveAverage(list))}
      </div>
    )
  }
  render () {
    const {movies, selectedGenres} = this.props

    if(isEmpty(selectedGenres)) {
      return this.renderList(movies)
    }

    const selectedMovies = movies.filter(m => {
      //checks if a movie's genre includes all selected genres
      return selectedGenres.every(elem => m.genre_ids.indexOf(elem) > -1)
    })
    return this.renderList(selectedMovies)
  }
}

export default Movies