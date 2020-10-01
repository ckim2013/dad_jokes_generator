import React from 'react';

import JokeDisplay from './JokeDisplayContainer'
import JokeCue from './JokeCueContainer';
import JokeGenerate from './JokeGenerateContainer';

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
      <JokeGenerate 
        cueWord={ cueWord }
        updateJoke={ updateJoke }
      /> 
    </div>
  );
}

export default JokeGeneratorView;