export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = () => ({
  type: FETCH_CHEESES_SUCCESS
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => ({
  type: FETCH_CHEESES_ERROR
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  return fetch('/api/cheeses')
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data =>
      dispatch(fetchCheesesSuccess(data))
    ).catch(err => 
      dispatch(fetchCheesesError(err))
    );
}