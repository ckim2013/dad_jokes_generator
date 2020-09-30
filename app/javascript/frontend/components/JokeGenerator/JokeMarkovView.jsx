import React from 'react';

const JokeMarkovView = (props) => {
  const {
    updateJoke,
  } = props;

  return (
    <button onClick={ () => updateJoke('Markoved!') }>
      Fetch Markov
    </button>
  );
};

export default JokeMarkovView;
