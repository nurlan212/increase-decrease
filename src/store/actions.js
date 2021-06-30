import {
  FETCH_COUNTER_REQUEST,
  FETCH_COUNTER_SUCCESS,
  FETCH_COUNTER_ERROR,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  ADD,
  SUBTRACT,
  CLOSE_MODAL,
} from "./actionTypes";
import axios_counter from "../axios-counter";
import axios from "axios";

export const increase_counter = () => {
  return { type: INCREASE_COUNTER };
};
export const decrease_counter = () => {
  return { type: DECREASE_COUNTER };
};
export const add_value = (value) => {
  return { type: ADD, value };
};
export const subtract_value = (value) => {
  return { type: SUBTRACT, value };
};
export const close_modal = () => {
  return { type: CLOSE_MODAL };
};
const fetch_counter_request = () => {
  return { type: FETCH_COUNTER_REQUEST };
};
const fetch_counter_success = (counter) => {
  return { type: FETCH_COUNTER_SUCCESS, counter };
};
const fetch_counter_error = (error) => {
  return { type: FETCH_COUNTER_ERROR, error };
};

let firebaseKey;
export const fetch_counter = () => {
  return async (dispatch, getData) => {
    dispatch(fetch_counter_request());
    try {
      const response = await axios_counter.get("/67_1.json");
      firebaseKey = Object.keys(response.data)[0];
      dispatch(fetch_counter_success(response.data[firebaseKey].counter));
    } catch (e) {
      dispatch(fetch_counter_error(e));
    }
  };
};

let cancelToken;
export const fetch_counter_post = (curCounter) => {
  return async (dispatch) => {
    if (firebaseKey) {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();
      try {
        await axios_counter.put(
          `/67_1/${firebaseKey}.json`,
          { counter: curCounter },
          { cancelToken: cancelToken.token }
        );
      } catch (e) {
        dispatch(fetch_counter_error(e));
      }
    }
  };
};
