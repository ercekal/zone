
import { FETCH_GENRES, SELECT_GENRE } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GENRES:
    return {...state, genres: action.payload };
    // case SELECT_GENRE:
    // return {...state, selectedGenres: action.payload.genres };
  }
  return state;
}