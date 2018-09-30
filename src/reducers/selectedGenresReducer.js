
import { FETCH_GENRES, SELECT_GENRE } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_GENRE:
    return {...state, selectedGenres: action.payload };
  }
  return state;
}