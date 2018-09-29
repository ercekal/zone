import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';
import GenresReducer from './genresReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  genres: GenresReducer
});

export default rootReducer;