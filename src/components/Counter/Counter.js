import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrease_counter, fetch_counter, fetch_counter_post, increase_counter, add_value, subtract_value, close_modal } from '../../store/actions';
import Preloader from '../UI/Preloader/Preloader';
import Modal from '../UI/Modal/Modal';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const errorShowed = useSelector(state => state.errorShowed);
  const dispatch = useDispatch();
  const VALUE = 20;
  

  const increase = () => {
    dispatch(increase_counter());    
  };

  const decrease = () => {
    dispatch(decrease_counter());
  }

  const addVal = () => {
    dispatch(add_value(VALUE));
  };

  const subtractVal = () => {
    dispatch(subtract_value(VALUE));
  };

  const closeModal = () => {
    dispatch(close_modal());
  };

  useEffect(() => {
    dispatch(fetch_counter());
  }, [dispatch])

  useEffect(() => {
    dispatch(fetch_counter_post(counter));
  }, [counter, dispatch])  
  
  return (
    <>
      {errorShowed ? <Modal text = {error.message} onClickBtn = {closeModal}/> : null}
      {isLoading ? <Preloader /> : null}
      <h1>{counter}</h1>
      <button onClick = {increase}>Increase</button>
      <button onClick = {decrease}>Decrease</button>
      <button onClick = {addVal}>Add {VALUE}</button>
      <button onClick = {subtractVal}>Subtract {VALUE}</button>
    </>
  );
};

export default Counter;