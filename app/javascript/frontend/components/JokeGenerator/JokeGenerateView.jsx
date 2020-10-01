import React from 'react';

const JokeGenerateView = (props) => {
  const {
    submitRequest,
  } = props;
  
  return (
    <div>
      <button
        onClick={ submitRequest }
      >
        Generate
      </button>  
    </div>
  );
};

export default JokeGenerateView;