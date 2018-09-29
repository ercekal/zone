import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export default rootReducer;