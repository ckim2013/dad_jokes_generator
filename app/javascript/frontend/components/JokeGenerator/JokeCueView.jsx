import React from 'react';

const JokeCueView = (props) => {
  const {
    cueWord,
    onChange,
  } = props;
  
  return (
    <div>
      <input 
        name='cueWord'
        onChange={ onChange }
        placeholder='Cue Word'
        type='text'
        value={ cueWord }
      />
    </div>  
  );
};

export default JokeCueView;