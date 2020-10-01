import React from 'react';

import JokeDisplay from './JokeDisplayContainer'
import JokeCue from './JokeCueContainer';
import JokeApi from './JokeApiContainer';
import JokeMarkov from './JokeMarkovContainer';

const JokeGeneratorView = (props) => {
  const { 
    cueWord,
    joke,
    updateCueWord,
    updateJoke,
   } = props;
  
  return (
    <div>
      <JokeDisplay
        joke={ joke }
      />
      <JokeCue
        cueWord={ cueWord }
        updateCueWord={ updateCueWord }
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