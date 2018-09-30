
import { FETCH_GENRES } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GENRES:
    return {...state, genres: action.payload };
  }
  return state;
}