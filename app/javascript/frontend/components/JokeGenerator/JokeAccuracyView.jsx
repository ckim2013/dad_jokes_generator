import React from 'react';

const JokeAccuracyView = (props) => {
  const {
    accuracy, 
    onChange,
  } = props;
  
  return (
    <div>
      <form>
        <input 
          name='accuracy'
          onChange={ onChange }
          placeholder='Accuracy'
          value={ accuracy }
        />
      </form>
    </div>  
  );
};

export default JokeAccuracyView;