import React from 'react';

const JokeGenerateView = (props) => {
  const {
    submitRequest,
  } = props;
  
  return (
    <button
      onClick={ submitRequest }
    >
      Fetch API
    </button>  
  );
};

export default JokeGenerateView;