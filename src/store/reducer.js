import {FETCH_COUNTER_REQUEST, FETCH_COUNTER_SUCCESS, FETCH_COUNTER_ERROR} from './actionTypes';

const initialState = {
  counter: 12,
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_COUNTER_REQUEST:
      return {...state, isLoading: true};
    case FETCH_COUNTER_SUCCESS:
      return {...state, counter: action.counter};
    case FETCH_COUNTER_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }  
}

export default reducer;