
import { FETCH_MOVIES } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
    return {...state, movies: action.payload.results };
  }
  return state;
}