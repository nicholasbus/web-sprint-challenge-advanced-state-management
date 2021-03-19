import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE';
export const SMURF_ADD = 'SMURF_ADD';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: SMURF_FETCH_START })
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: SMURF_FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SMURF_FETCH_FAILURE, payload: err.message }))
}

export const addSmurf = (name, nickname, position, summary) => {
    const newSmurf = {
        name,
        nickname,
        position,
        description: summary
    }
    return {
        type: SMURF_ADD,
        payload: newSmurf
    }
}

export const setError = (error) => {
    return {
        type: ADD_ERROR,
        payload: error
    }
} 