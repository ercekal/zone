import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';
// import GenresReducer from './genresReducer';
import SelectedGenresReducer from './selectedGenresReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  // genres: GenresReducer,
  selectedGenres: SelectedGenresReducer
});

export default rootReducer;