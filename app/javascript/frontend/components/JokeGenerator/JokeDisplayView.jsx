import React from 'react';

const JokeDisplayView = (props) => {
  const { joke } = props;
  
  return (
    <div>
      { joke }
    </div>  
  );
};

export default JokeDisplayView;