const key = "d5ef52ec"
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&`;
export const START_FETCHING = "START_FETCHING";
export const DATA_FETCHED = "DATA_FETCHED";
export const FETCHING_ERROR = "FETCHING_ERROR";

const startFetching = () => {
    return {
        type: START_FETCHING
    }
}

const dataFetched = (data) => {
  return {
      type: DATA_FETCHED,
      payload: data
  }
}

const fetchingError = (error) => {
  return {
      type: FETCHING_ERROR,
      payload: error
  }
}

export function fetchData(search) {
    return (dispatch) => {
        dispatch(startFetching());
        fetch(API + search, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(respponse => respponse.json())
            .then(data => {
                dispatch(dataFetched(data))
            })
            .catch(error => dispatch(fetchingError(error)));
    }
}