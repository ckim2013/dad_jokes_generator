import React from 'react';

const JokeCueView = (props) => {
  const {
    cueWord,
    updateCueWord,
  } = props;
  
  return (
    <div>
      <input 
        placeholder='Cue Word'
        type='text'
        onChange={ updateCueWord }
        value={ cueWord }
      />
    </div>  
  );
};

export default JokeCueView;