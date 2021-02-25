import {FETCH_COUNTER_REQUEST, FETCH_COUNTER_SUCCESS, FETCH_COUNTER_ERROR, INCREASE_COUNTER, DECREASE_COUNTER, ADD, SUBTRACT} from './actionTypes';

const initialState = {
  counter: 3,
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_COUNTER_REQUEST:
      return {...state, isLoading: true};
    case FETCH_COUNTER_SUCCESS:
      return {...state, counter: action.counter, isLoading: false};
    case FETCH_COUNTER_ERROR:
      return {...state, error: action.error, isLoading: false};
    case INCREASE_COUNTER:
      return {...state, counter: state.counter + 1};
    case DECREASE_COUNTER:
      if(state.counter > 0) {
        return {...state, counter: state.counter - 1};
      } else {
        return state;
      }
    case ADD:
      return {...state, counter: state.counter + action.value};
    case SUBTRACT:
      if(state.counter >= action.value) {
        return {...state, counter: state.counter - action.value};
      } else {
        return state;
      }      
    default:
      return state;
  }  
}

export default reducer;