import React from 'react';

import Disclaimer from './Disclaimer';
import JokeAccuracy from './JokeAccuracyContainer';
import JokeCue from './JokeCueContainer';
import JokeDisplay from './JokeDisplayContainer'
import JokeGenerate from './JokeGenerateContainer';

const JokeGeneratorView = (props) => {
  const { 
    accuracy,
    cueWord,
    joke,
    onChange,
    updateJoke,
   } = props;
  
  return (
    <div className='container'>
      <div className='title'>Dad Joke Generator</div>
      <JokeAccuracy 
        accuracy={ accuracy }
        onChange={ onChange }
      />
      <JokeCue
        cueWord={ cueWord }
        onChange={ onChange }
      />
      <JokeGenerate 
        accuracy={ accuracy }
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