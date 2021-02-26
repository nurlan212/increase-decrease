import React from 'react';
import './Modal.css';

const Modal = ({text, onClickBtn}) => {
  return <>
    <div className="Modal__backdrop"/>
    <div className="Modal__window">
      <div className="Modal__window__header">
        <button className='Modal__window__btn Modal__window__btn-close' onClick = {onClickBtn}>
          &#10005;
        </button>
      </div>
      <p className="Modal__window__text">{text}</p>
      <button className="Modal__window__btn Modal__window__btn-ok" onClick = {onClickBtn}>
        Ok
      </button>
    </div>
  </>
};

export default Modal;