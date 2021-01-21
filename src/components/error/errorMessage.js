import React from 'react';
import img from './error.jpg';
import './error.css';

const ErrorMessage = () => {
  return (
    <>
      <span className="errorSpan"> Somesing goes wrong !!!</span>
      <img className="errorImg" src={img} alt="Error"></img>
    </>
  );
};

export default ErrorMessage;
