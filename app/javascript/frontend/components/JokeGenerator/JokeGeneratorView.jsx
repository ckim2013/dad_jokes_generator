import React from 'react';

import JokeDisplay from './JokeDisplayContainer'
import JokeCue from './JokeCueContainer';
import JokeGenerate from './JokeGenerateContainer';
import Disclaimer from './Disclaimer';

const JokeGeneratorView = (props) => {
  const { 
    cueWord,
    joke,
    updateCueWord,
    updateJoke,
   } = props;
  
  return (
    <div className='container'>
      <div className='title'>Dad Joke Generator</div>
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
      <Disclaimer />
    </div>
  );
}

export default JokeGeneratorView;