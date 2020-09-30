import React from 'react';

import JokeDisplay from './JokeDisplayContainer'
import JokeApi from './JokeApiContainer';
import JokeMarkov from './JokeMarkovContainer';

const JokeGeneratorView = (props) => {
  const { 
    joke,
    updateJoke,
   } = props;
  
  return (
    <div>
      <JokeDisplay
        joke={ joke }
      />
      <JokeApi 
        updateJoke={ updateJoke }
      />  
      <JokeMarkov
        updateJoke={ updateJoke }
      />
    </div>
  );
}

export default JokeGeneratorView;