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
      <JokeCue
        cueWord={ cueWord }
        updateCueWord={ updateCueWord }
      />
      <JokeGenerate 
        cueWord={ cueWord }
        updateJoke={ updateJoke }
      /> 
      <JokeDisplay
        joke={ joke }
      />
    </div>
  );
}

export default JokeGeneratorView;