import React from 'react';

const JokeGenerateView = (props) => {
  const {
    submitRequest,
  } = props;
  
  return (
    <button
      onClick={ submitRequest }
    >
      Generate
    </button>  
  );
};

export default JokeGenerateView;