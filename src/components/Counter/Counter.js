import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetch_counter} from '../../store/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_counter());
  }, [dispatch])
  
  return (
    <>
      <h1>{counter}</h1>
      <button>Increase</button>
      <button>Decrease</button>
      <button>Add 10</button>
      <button>Subtract 10</button>
    </>
  );
};

export default Counter;