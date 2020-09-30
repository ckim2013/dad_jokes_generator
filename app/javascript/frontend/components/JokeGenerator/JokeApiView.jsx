import React from 'react';

const JokeApiView = (props) => {
  const {
    updateJoke,
  } = props;
  
  return (
    <button
      onClick={ () => updateJoke('APIed!') }
    >
      Fetch API
    </button>  
  );
};

export default JokeApiView;