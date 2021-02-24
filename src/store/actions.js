import {FETCH_COUNTER_REQUEST, FETCH_COUNTER_SUCCESS, FETCH_COUNTER_ERROR} from './actionTypes';
import axios from '../axios-counter';

const fetch_counter_request = () => {
  return {type: FETCH_COUNTER_REQUEST};
};
const fetch_counter_success = (counter) => {
  return {type: FETCH_COUNTER_SUCCESS, counter};
};
const fetch_counter_error = error => {
  return {type: FETCH_COUNTER_ERROR, error};
};

export const fetch_counter = () => {
  return async(dispatch, getData) => {
    dispatch(fetch_counter_request());
    try {
      const response = await axios.get('/counter.json');
      dispatch(fetch_counter_success(response.data));
    } catch(e) {
      dispatch(fetch_counter_error(e));
    }
  }
};