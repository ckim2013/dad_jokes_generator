import React from 'react';

const JokeCueView = (props) => {
  const {
    cueWord,
    updateCueWord,
  } = props;
  
  return (
    <input 
      type='text'
      onChange={ updateCueWord }
      value={ cueWord }
    />
  );
};

export default JokeCueView;