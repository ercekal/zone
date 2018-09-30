
import { UPDATE_GENRE } from '../actions'
import {includes} from 'lodash'
const INITIAL_STATE = {
  selectedGenres: []
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_GENRE:
    !includes(state.selectedGenres, action.payload) ?
    {
      ...state,
      selectedGenres: state.selectedGenres.push(action.payload)
    } : state.selectedGenres = state.selectedGenres.filter(i => i !== action.payload)
  }
  return state;
}