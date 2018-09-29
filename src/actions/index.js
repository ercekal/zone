import axios from 'axios'

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_GENRES = 'FETCH_GENRES';

const API_KEY = "b0659a2e955ea3f4ebab1b70f16905bd"

export function fetchMovies() {
  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data
      })
    })
  }
}

export function fetchGenres() {
  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((res) => {
      dispatch({
        type: FETCH_GENRES,
        payload: res.data
      })
    })
  }
}