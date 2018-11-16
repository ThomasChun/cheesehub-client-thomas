import {
  FETCH_CHEESES,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_ERROR
} from '../actions/cheese';
const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export default function reducer(state=initialState, action) {
  
}