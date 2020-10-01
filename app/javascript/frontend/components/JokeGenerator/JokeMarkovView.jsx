import React from 'react';

const JokeMarkovView = (props) => {
  const {
    submitRequest,
  } = props;

  return (
    <button onClick={ submitRequest }>
      Fetch Markov
    </button>
  );
};

export default JokeMarkovView;
