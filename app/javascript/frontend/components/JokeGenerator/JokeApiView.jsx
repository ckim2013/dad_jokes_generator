import React from 'react';

const JokeApiView = (props) => {
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

export default JokeApiView;