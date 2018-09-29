import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';
import GenresReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  genres: GenresReducer
});

export default rootReducer;