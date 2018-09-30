
import { UPDATE_GENRE } from '../actions'
import {includes} from 'lodash'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_GENRE:
    return !includes(state, action.payload) ? [...state, action.payload] : state = state.filter(i => i !== action.payload)
  }
  return state;
}