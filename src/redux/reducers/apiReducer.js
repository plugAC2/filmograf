import {START_FETCHING, DATA_FETCHED, FETCHING_ERROR} from "../actions/apiFetch";

const initialState = {
    isFetching: false,
    data: {
        Search: []
    },
    error: ""
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case DATA_FETCHED:
            return {
                ...state,
                isFetching: false,
                data: payload
            }
        case FETCHING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        default:
            return {...state};
    }
}