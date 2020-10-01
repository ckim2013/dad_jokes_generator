import React from 'react';

const JokeDisplayView = (props) => {
  const { joke } = props;
  
  return (
    <div className='joke-display'>
      { joke }
    </div>  
  );
};

export default JokeDisplayView;