import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';
import SelectedGenresReducer from './selectedGenresReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectedGenres: SelectedGenresReducer
});

export default rootReducer;